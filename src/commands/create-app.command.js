import { execSync } from "child_process";
import { fileNameValidator, logger } from "../utils/index.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs-extra";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function CreateApp(input) {
   const name = input === "." ? input : fileNameValidator(input);
   const project = path.join(process.cwd(), name);
   const framework = path.resolve(__dirname, "../../templates/react-ts/framework");

   //--------Vite project------
   logger.info("🚀 Creating Vite project...");
   execSync(`npm create vite@latest ${name} -- --template react-ts`, { stdio: "inherit" });

   //--------Overridden with framework ---------
   fs.ensureDirSync(project);
   const srcPath = path.join(project, "src");
   if (fs.existsSync(srcPath)) fs.rmSync(srcPath, { recursive: true, force: true });
   fs.readdirSync(framework).forEach((file) => {
      const source = path.join(framework, file);
      const target = path.join(project, file);
      if (fs.lstatSync(source).isDirectory()) {
         fs.ensureDirSync(target);
         fs.copySync(source, target, { overwrite: true });
      } else {
         fs.copyFileSync(source, target);
      }
   });

   //---------------packages-----------
   const dependencies = [
      "@retork/interceptor", //
      "@retork/utils",
      "axios",
      "react-helmet",
      "react-router",
      "@reduxjs/toolkit",
      "react-redux",
   ].join(" ");

   const devDependencies = [
      "@types/react-helmet", //
   ].join(" ");

   //---------------Installing packages-----------
   logger.info("📦 Installing dependencies...");
   execSync(`cd ${name} && npm install ${dependencies}`, { stdio: "inherit" });

   logger.info("📦 Installing dev dependencies...");
   execSync(`cd ${name} && npm i -D ${devDependencies}`, { stdio: "inherit" });

   logger.success(`✅ Successfully created Retork app: ${name}`);
}
