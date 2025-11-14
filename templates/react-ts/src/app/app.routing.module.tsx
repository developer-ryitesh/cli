import { Route, Routes } from "react-router";
import LandingPage from "./landing/landing.page";
import NotFoundPage from "./not-found/not-found.page";

export default function AppRoutingModule() {
   return (
      <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
   );
}
