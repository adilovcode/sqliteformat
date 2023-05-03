# sqliteformat

A utility function for merging SQL strings with placeholders and handling single quotes for SQLite.

## `format(sql: string, parameters: any[]): string`

Merges the provided SQL string by replacing placeholders (`?`) with corresponding values from the `parameters` array.
This function handles single quotes in parameter values, ensuring proper formatting for SQLite.

### Parameters

- `sql` (`string`): The SQL string with placeholders to be merged.
- `parameters` (`array`): An array of values to replace the placeholders in the SQL string.

### Returns

- `result` (`string`): The formatted SQL string with replaced placeholders.

### Throws

- `Error` - If the number of parameters does not match the number of placeholders in the SQL string.
- `Error` - If an invalid start index is encountered during replacement.

### Example

```javascript
import { format } from 'sqliteformat';

const sql = "SELECT * FROM users WHERE name = ? AND age > ?";
const parameters = ['John Doe', 30];

const formattedSql = format(sql, parameters);
console.log(formattedSql);
// Output: SELECT * FROM users WHERE name = 'John Doe' AND age > 30
