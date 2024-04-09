const parseSearchString = (str: string): string[] => {
  const string = str.trim();
  if (!string) {
    return [];
  }
  const parsed = string.split(',');
  const result: string[] = [];
  parsed.forEach((text) => {
    const trimmed = text.trim();
    if (trimmed) {
      result.push(trimmed);
    }
  });
  return result;
}

export default parseSearchString;
