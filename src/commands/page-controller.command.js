import fs from "fs-extra";
import path from "path";
import { logger, placeholder } from "../utils/index.js";

const template = `import { Helmet } from "react-helmet";
import use{{PlaceHolder}}Controller from "./%placeHolder%.controller";

const HelmetContainer = ({ children }: { children: ReactNode }) => (
   <>
      <Helmet>
         <title>{{placeHolder}}</title>
      </Helmet>
      {children}
   </>
);

export default function {{PlaceHolder}}Page() {
  const ctrl = use{{PlaceHolder}}Controller()
  return (
      <HelmetContainer>
        <p>{ctrl.name} page work!</p>
      </HelmetContainer>
  );
}
`;

const ctrl = ` export default function use{{PlaceHolder}}Controller() {
      return { name : "{{PlaceHolder}}" }
}`;
export default async function PageController(name) {
   const isValidName = /^[a-z]+(-[a-z]+)*$/.test(name);
   if (!isValidName) {
      logger.error(`❌ Invalid Page name: "${name}"\n` + "Page names must be lowercase and may include hyphens (e.g. user, user-list).");
      process.exit(1);
   }
   const dir = path.join(process.cwd(), name);
   await fs.mkdirp(dir);
   const filePath = path.join(dir, `${name}.page.tsx`);
   const controllerFile = path.join(dir, `${name}.controller.ts`);

   await fs.writeFile(filePath, placeholder({ template: template, input: name }));
   await fs.writeFile(controllerFile, placeholder({ template: ctrl, input: name }));

   logger.success(`✅ Page + Controller : /${name} created`);
}
