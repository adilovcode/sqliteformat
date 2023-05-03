export const replaceSubstringByIndex = (
  originalString,
  startIndex,
  replacementString
) => {
  return (
    originalString.slice(0, startIndex) +
    replacementString +
    originalString.slice(startIndex + 1)
  );
}
