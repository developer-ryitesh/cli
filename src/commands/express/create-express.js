import { execSync } from "child_process";
import { fileNameValidator, logger, render } from "../../utils/index.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs-extra";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function CreateExpress(input) {
   const name = input === "." ? input : fileNameValidator(input);
   const project = path.join(process.cwd(), name);
   const framework = path.resolve(__dirname, "../../../templates/express/framework");

   //--------Overridden with framework ---------
   fs.copySync(framework, project, { overwrite: true });
   render(project, name);

   //---------------packages-----------
   const dependencies = ["express", "http-errors", "bcrypt", "zod", "cookie-parser"].join(" ");
   const devDependencies = ["tsx", "@types/express", "@types/bcrypt", "typescript"].join(" ");

   //    //---------------Installing packages-----------
   logger.info("📦 Installing dependencies...");
   execSync(`cd ${name} && npm install ${dependencies}`, { stdio: "inherit" });

   logger.info("📦 Installing dev dependencies...");
   execSync(`cd ${name} && npm i -D ${devDependencies}`, { stdio: "inherit" });

   logger.success(`✅ Successfully created Retork server: ${name}`);
}
