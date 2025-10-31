import fs from "fs-extra";
import path from "path";
import { logger, renderTemplate } from "../utils/index.js";

const template = `export default function use{{PlaceHolder}}Controller() {
  const name = "{{PlaceHolder}}";
  return { name };
}
`;

export default async function Controller(name) {
   // ✅ Validate controller name (lowercase + optional hyphens)
   const isValidName = /^[a-z]+(-[a-z]+)*$/.test(name);
   if (!isValidName) {
      logger.error(`❌ Invalid Controller name: "${name}"\n` + "Controller names must be lowercase and may include hyphens (e.g. user, user-list).");
      process.exit(1);
   }

   // ✅ Create controller file directly (no folder)
   const filePath = path.join(process.cwd(), `${name}.controller.tsx`);

   await fs.writeFile(filePath, renderTemplate({ template, input: name }));
   logger.success(`✅ Controller : ./${name}.controller.ts created`);
}
