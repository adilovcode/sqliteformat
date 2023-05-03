export const replaceSubstringByIndex = (
  originalString: string,
  startIndex: number,
  replacementString: string
) => {
  return (
    originalString.slice(0, startIndex) +
    replacementString +
    originalString.slice(startIndex + 1)
  );
};
