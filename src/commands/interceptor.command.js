import fs from "fs-extra";
import path from "path";
import { logger, placeholder } from "../utils/index.js";

const template = `import type { Interceptor, Req, Res, Instance } from "@retork/interceptor";

export default class {{PlaceHolder}}Interceptor implements Interceptor {
   public instance: Instance;

   constructor(instance: Instance) {
      this.instance = instance;
   }

   intercept(req: Req, res: Res): Instance {
      req.use(
         (config) => {
            console.log("Request interceptor");
            return config;
         },
         (error) => Promise.reject(error)
      );

      res.use(
         (response) => {
            console.log("Response interceptor");
            return response;
         },
         (error) => Promise.reject(error)
      );

      return this.instance;
   }
}`;

export default async function Interceptor(name) {
   // ✅ Validate controller name (lowercase + optional hyphens)
   const isValidName = /^[a-z]+(-[a-z]+)*$/.test(name);
   if (!isValidName) {
      logger.error(`❌ Invalid Interceptor name: "${name}"\n` + "Interceptor names must be lowercase and may include hyphens (e.g. user, user-list).");
      process.exit(1);
   }

   // ✅ Create controller file directly (no folder)
   const filePath = path.join(process.cwd(), `${name}.interceptor.ts`);

   await fs.writeFile(filePath, placeholder({ template, input: name }));
   logger.success(`✅ Controller : ./${name}.interceptor.ts created`);
}
