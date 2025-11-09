import { textTransform } from "./text-transform.js";

export function renderPlaceholder({ template, input }) {
   return String(template)
      .replace(/{{PlaceHolder}}/g, textTransform(input, "PascalCase"))
      .replace(/{{placeHolder}}/g, textTransform(input, "CamelCase"))
      .replace(/%placeHolder%/g, textTransform(input, "Original"));
}
