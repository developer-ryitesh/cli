import type { ReactNode } from "react";
import { Helmet } from "react-helmet";

const HelmetContainer = ({ children }: { children: ReactNode }) => (
   <>
      <Helmet>
         <title>PlaceHolder</title>
         <meta name="description" content="PlaceHolder page" />
         <meta name="keywords" content="React, SEO, Landing Page" />
      </Helmet>
      {children}
   </>
);

export default function PlaceHolderPage() {
   return (
      <HelmetContainer>
         <p>PlaceHolder page work!</p>
      </HelmetContainer>
   );
}
