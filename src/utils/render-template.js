import { textTransform } from "./text-transform.js";

export function renderTemplate({ template, input }) {
   return String(template)
      .replace(/{{PlaceHolder}}/g, textTransform(input, "PascalCase"))
      .replace(/{{placeHolder}}/g, textTransform(input, "CamelCase"))
      .replace(/%placeHolder%/g, textTransform(input, "Original"));
}
