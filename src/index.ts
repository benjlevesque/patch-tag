import { execSync } from "child_process";
import { getInput, info } from "@actions/core";
import { getNewValue } from "./lib";

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
