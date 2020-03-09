import { execSync } from "child_process";
import { getInput, info } from "@actions/core";

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

export const run = () => {
  const newTag = getInput("tag", {
    required: true
  });
  const target = getInput("target", {
    required: true
  });
  const path = getInput("path", {
    required: true
  });

  const oldImage = execSync(`yq r ${target} ${path}`).toString();
  const newImage = getNewValue(oldImage, newTag);
  info(newImage);
  execSync(`yq w -i ${target} ${path} ${newImage}`);
};
