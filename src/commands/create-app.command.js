import { execSync } from "child_process";
import { logger } from "../utils/index.js";
// import path from "path";
// import fs from "fs-extra";

export default async function CreateApp(name) {
   logger.success(`🚀 Creating a new Vite React + TypeScript project: ${name}`);
   execSync(`npm create vite@latest ${name} -- --template react-ts`, {
      stdio: "inherit",
   });
   // const srcPath = path.join(process.cwd(), name, "src");
   // if (fs.existsSync(srcPath)) {
   //    fs.rmSync(srcPath, { recursive: true, force: true });
   // }
   const packages = [
      "@retork/state", //
      "@retork/interceptor",
      "@retork/utils",
   ];
   logger.info("📦 Installing dependencies...");
   execSync(`cd ${name} && npm install ${packages.join(" ")}`, { stdio: "inherit" });
   logger.success(`✅ Successfully created ${name} (React + TypeScript)`);
}
