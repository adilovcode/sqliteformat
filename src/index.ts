import {replaceSubstringByIndex} from './helpers';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const format = (sql: string, parameters: any[]) => {
  parameters = [...parameters];

  const placeholders = [];

  let currentIndex = 0;
  let inQuotes = false;

  for (let i = 0; i < sql.length; i++) {
    if (sql[i] === "'") {
      inQuotes = !inQuotes;
    } else if (!inQuotes && sql[i] === '?') {
      placeholders.push(currentIndex);
    }

    currentIndex++;
  }

  if (parameters.length !== placeholders.length)
    throw new Error('Invalid number of parameters');

  for (const parameter of parameters.reverse()) {
    const sqlReplacement =
      typeof parameter === 'string'
        ? `'${parameter.replace(/'/g, "''")}'`
        : parameter;

    const startIndex = placeholders.pop();

    if (!startIndex) throw new Error('Invalid start index');

    sql = replaceSubstringByIndex(sql, startIndex, sqlReplacement);
  }

  return sql;
};
