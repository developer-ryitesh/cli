import fs from "fs-extra";
import path from "path";
import { fileNameValidator, getDirname, logger, render } from "../utils/index.js";

export default async function Interceptor(input) {
   const name = fileNameValidator(input);
   const targetDir = path.join(process.cwd(), "");
   const { __dirname } = getDirname(import.meta);
   const templatePath = path.resolve(__dirname, "../../templates/react-ts/builders/interceptor");

   fs.copySync(templatePath, targetDir, { overwrite: true });
   render(targetDir, name);
   logger.success(`✅ Interceptor : ./${name}.interceptor.ts created`);
}
