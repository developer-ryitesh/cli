import { fileURLToPath } from "url";
import path from "path";

export function getDirname(meta) {
   const __filename = fileURLToPath(meta.url);
   const __dirname = path.dirname(__filename);
   return { __filename, __dirname };
}
