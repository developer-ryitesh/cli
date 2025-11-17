import { execSync } from "child_process";
import { fileNameValidator, logger } from "../utils/index.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs-extra";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function CreateApp(input) {
   const name = fileNameValidator(input);
   const projectPath = path.join(process.cwd(), name);
   const srcPath = path.join(projectPath, "src");
   const templatePath = path.resolve(__dirname, "../../templates/react-ts/src");
   
   logger.info("🚀 Creating Vite project...");
   execSync(`npm create vite@latest ${name} -- --template react-ts`, { stdio: "inherit" });

   fs.ensureDirSync(templatePath);
   if (fs.existsSync(srcPath)) {
      fs.rmSync(srcPath, { recursive: true, force: true });
   }
   fs.copySync(templatePath, srcPath, { overwrite: true });

   const dependencies = [
      "@retork/interceptor", //
      "@retork/utils",
      "axios",
      "react-helmet",
      "react-router",
      "@reduxjs/toolkit",
      "react-redux",
   ];
   const devdependencies = [
      "npm i --save-dev @types/react-helmet", //
   ];
   logger.info("📦 Installing dependencies...");
   execSync(`cd ${name} && npm install ${dependencies.join(" ")}`, { stdio: "inherit" });
   logger.info("📦 Installing development dependencies...");
   execSync(`cd ${name} && npm i --save-dev ${devdependencies.join(" ")}`, { stdio: "inherit" });
   logger.success(`✅ Successfully created Retork app: ${name}`);
}
