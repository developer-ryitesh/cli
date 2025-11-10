import path from "path";
import fs from "fs-extra";
import { textTransform } from "./index.js";

export function render(dir, name) {
   const entries = fs.readdirSync(dir, { withFileTypes: true });
   for (const entry of entries) {
      const srcPath = path.join(dir, entry.name);

      // Handle directories recursively
      if (entry.isDirectory()) {
         render(srcPath, name);
         continue;
      }

      // Read file content
      let data = fs.readFileSync(srcPath, "utf-8");

      // Replace placeholders inside file contents

      const updatedContent = String(data)
         .replace(/PlaceHolder/g, textTransform(name, "PascalCase"))
         .replace(/placeHolder/g, textTransform(name, "CamelCase"));

      // Compute new file name if it contains [placeholder]
      const newFileName = entry.name.replace(/\[placeholder\]/g, name);
      const newPath = path.join(dir, newFileName);

      // Write the updated content
      fs.writeFileSync(newPath, updatedContent, "utf-8");

      // If file name changed, remove the old one
      if (newPath !== srcPath) fs.unlinkSync(srcPath);
   }
}
