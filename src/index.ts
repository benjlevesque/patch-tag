import { execSync } from "child_process";
import { getInput, info } from "@actions/core";
import { getNewValue } from "./lib";

const newTag = getInput("tag", {
  required: true,
});
const target = getInput("target", {
  required: true,
});
const path = getInput("path", {
  required: true,
});
let style = getInput("style", {}) || "double";

if (
  !["single", "double", "folded", "flow", "literal", "tagged"].includes(style)
) {
  style = "double";
}

const oldImage = execSync(`yq r ${target} ${path}`).toString();
const newImage = getNewValue(oldImage, newTag);
info(newImage);
execSync(`yq w -i --style ${style} ${target} ${path} ${newImage}`);
