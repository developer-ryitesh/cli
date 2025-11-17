import fs from "fs-extra";
import path from "path";
import { fileNameValidator, getDirname, logger, render } from "../utils/index.js";

export default async function Service(input) {
   const name = fileNameValidator(input);
   const targetDir = path.join(process.cwd(), "");
   const { __dirname } = getDirname(import.meta);
   const templatePath = path.resolve(__dirname, "../../templates/react-ts/builders/service");

   fs.copySync(templatePath, targetDir, { overwrite: true });
   render(targetDir, name);
   logger.success(`✅ Service : ./${name}.service.ts created`);
}
