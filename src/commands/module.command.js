import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs-extra";
import { logger, renderPlaceholder } from "../utils/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function Module(name) {
   const targetDir = path.join(process.cwd(), name);
   const templatePath = path.join(__dirname, "..", "..", "templates", "module");

   // Copy template to target directory first
   fs.copySync(templatePath, targetDir, { overwrite: true });

   // Then replace placeholders inside targetDir
   replacePlaceholders(targetDir, name);

   logger.success(`✅ Module "${name}" created at ${targetDir}`);
}

/**
 * Recursively replaces placeholders in file names and file contents
 */
function replacePlaceholders(dir, name) {
   const entries = fs.readdirSync(dir, { withFileTypes: true });
   for (const entry of entries) {
      const srcPath = path.join(dir, entry.name);

      // Handle directories recursively
      if (entry.isDirectory()) {
         replacePlaceholders(srcPath, name);
         continue;
      }

      // Read file content
      let data = fs.readFileSync(srcPath, "utf-8");

      // Replace placeholders inside file contents
      const updatedContent = renderPlaceholder({ template: data, input: name });

      // Compute new file name if it contains [placeholder]
      const newFileName = entry.name.replace(/\[placeholder\]/g, name);
      const newPath = path.join(dir, newFileName);

      // Write the updated content
      fs.writeFileSync(newPath, updatedContent, "utf-8");

      // If file name changed, remove the old one
      if (newPath !== srcPath) fs.unlinkSync(srcPath);
   }
}
