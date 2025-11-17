import { logger } from "./logger.js";

export function fileNameValidator(name) {
   const isValidName = /^[a-z]+(-[a-z]+)*$/.test(name);
   if (!isValidName) {
      logger.error(`❌ Invalid name: "${name}"\n` + "(e.g. user, user-list).");
      process.exit(1);
   }
   return name;
}
