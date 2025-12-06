import fs from "fs-extra";
import path from "path";
import { fileNameValidator, getDirname, logger, render } from "../../utils/index.js";

export default async function Page(input) {
   const name = fileNameValidator(input);
   const targetDir = path.join(process.cwd(), name);
   const { __dirname } = getDirname(import.meta);
   const templatePath = path.resolve(__dirname, "../../../templates/react-ts/builders/page");

   fs.copySync(templatePath, targetDir, { overwrite: true });
   render(targetDir, name);
   logger.success(`✅ Page : ./${name}.page.tsx created`);
   logger.success(`✅ Controller : ./${name}.controller.ts created`);
}
