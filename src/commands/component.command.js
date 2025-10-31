import fs from "fs-extra";
import path from "path";
import { logger, renderTemplate } from "../utils/index.js";

const template = `type Props = {};

export default function {{PlaceHolder}}({}: Props) {
   return <p>{{PlaceHolder}} Component work!</p>;
}
`;

export default async function Component(name, option) {
   const isValidName = /^[a-z]+(-[a-z]+)*$/.test(name);
   if (!isValidName) {
      logger.error(`❌ Invalid component name: "${name}"\n` + "Component names must be lowercase and may include hyphens (e.g. user, user-list).");
      process.exit(1);
   }
   const componentDir = path.join(process.cwd(), option.nf ? "" : name);
   await fs.mkdirp(componentDir);
   const filePath = path.join(componentDir, `${name}.tsx`);

   await fs.writeFile(filePath, renderTemplate({ template, input: name }));
   logger.success(`✅ Component : ./${name}.component.ts created`);
}
