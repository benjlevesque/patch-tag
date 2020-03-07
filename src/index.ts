import { execSync } from "child_process";
import { getInput } from "@actions/core";

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
const result = /(?<image>.*):(?<tag>[a-f0-9]{7})/.exec(oldImage);
const newImage = `${result.groups.image}:${newTag}`;
console.log(newImage);
execSync(`yq w -i ${target} ${path} ${newImage}`);
