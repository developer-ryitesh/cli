import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs-extra";
import { logger, render } from "../utils/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function Module(name) {
   const targetDir = path.join(process.cwd(), name);
   const templatePath = path.join(__dirname, "..", "..", "templates", "react-ts", "builders", "module");
   fs.copySync(templatePath, targetDir, { overwrite: true });
   render(targetDir, name);
   logger.success(`✅ Module "${name}" created at ${targetDir}`);
}
