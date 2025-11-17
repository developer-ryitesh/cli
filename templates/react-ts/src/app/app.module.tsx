import { Component, lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import NotFoundPage from "./not-found/not-found.page";
import LandingPage from "./landing/landing.page";
const AdminModule = lazy(() => import("./admin/admin.module"));

export default class AppModule extends Component {
   render() {
      return (
         <Suspense fallback={"loading..."}>
            <Routes>
               <Route path="/" element={<LandingPage />} />
               <Route path="admin/*" element={<AdminModule />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </Suspense>
      );
   }
}
