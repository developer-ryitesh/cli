 import fs from "fs-extra";
import path from "path";
import { logger, renderTemplate } from "../utils/index.js";

const template = `import { Helmet } from "react-helmet";

const HelmetContainer = ({ children }: { children: ReactNode }) => (
   <>
      <Helmet>
         <title>{{PlaceHolder}}</title>
      </Helmet>
      {children}
   </>
);

export default function {{PlaceHolder}}Page() {
  return (
      <HelmetContainer>
        <p>{{PlaceHolder}} page work!</p>
      </HelmetContainer>
  );
}
`;

export default async function Page(name, option) {
   const isValidName = /^[a-z]+(-[a-z]+)*$/.test(name);
   if (!isValidName) {
      logger.error(`❌ Invalid Page name: "${name}"\n` + "Page names must be lowercase and may include hyphens (e.g. user, user-list).");
      process.exit(1);
   }
   const dir = path.join(process.cwd(), option.nf ? "" : name);
   await fs.mkdirp(dir);
   const filePath = path.join(dir, `${name}.page.tsx`);

   await fs.writeFile(filePath, renderTemplate({ template: template, input: name }));
   logger.success(`✅ Page : ./${name}.page.tsx created`);
}
