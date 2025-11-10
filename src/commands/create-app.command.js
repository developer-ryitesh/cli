import { execSync } from "child_process";
import { logger } from "../utils/index.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs-extra";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function CreateApp(name) {
   const projectPath = path.join(process.cwd(), name);
   const srcPath = path.join(projectPath, "src");
   const templatePath = path.join(__dirname, "..", "..", "templates", "react-ts", "src");

   logger.info("🚀 Creating Vite project...");
   execSync(`npm create vite@latest ${name} -- --template react-ts`, { stdio: "inherit" });

   fs.ensureDirSync(templatePath);

   if (fs.existsSync(srcPath)) {
      fs.rmSync(srcPath, { recursive: true, force: true });
   }
   fs.copySync(templatePath, srcPath, { overwrite: true });

   const packages = [
      "@retork/state", //
      "@retork/interceptor",
      "@retork/utils",
      "axios",
   ];

   logger.info("📦 Installing dependencies...");
   execSync(`cd ${name} && npm install ${packages.join(" ")}`, { stdio: "inherit" });
   logger.success(`✅ Successfully created Retork app: ${name}`);
}
