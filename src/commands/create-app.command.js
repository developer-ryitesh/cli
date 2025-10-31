import { execSync } from "child_process";
import { logger } from "../utils/index.js";

export default async function CreateApp(name) {
   logger.success(`🚀 Creating a new Vite React + TypeScript project: ${name}`);
   execSync(`npm create vite@latest ${name} -- --template react-ts`, {
      stdio: "inherit",
   });

   const packages = [
      "axios", //
      "zustand",
      "classnames",
   ];

   logger.info("📦 Installing dependencies...");
   execSync(`cd ${name} && npm install ${packages.join(" ")}`, { stdio: "inherit" });
   logger.success(`✅ Successfully created ${name} (React + TypeScript)`);
}
