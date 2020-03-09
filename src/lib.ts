export const getNewValue = (previousValue: string, newTag: string) => {
  if (previousValue.match(/^[a-f0-9]*$/)) {
    return newTag;
  }
  const result = /(?<image>.*):(?<tag>[a-f0-9]*)/.exec(previousValue);
  if (!result) {
    throw new Error(`cannot parse image ${previousValue}`);
  }
  return `${result.groups.image}:${newTag}`;
};
