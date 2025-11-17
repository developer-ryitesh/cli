import type { ReactNode } from "react";
import { Helmet } from "react-helmet";

const HelmetContainer = ({ children }: { children: ReactNode }) => (
   <>
      <Helmet>
         <title>Placeholder</title>
         <meta name="description" content="placeholder page" />
         <meta name="keywords" content="React, SEO, Landing Page" />
      </Helmet>
      {children}
   </>
);

export default function PlaceholderPage() {
   return (
      <HelmetContainer>
         <p>placeholder page work!</p>
      </HelmetContainer>
   );
}
