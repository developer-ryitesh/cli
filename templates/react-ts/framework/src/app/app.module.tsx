import { Component, lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import NotFoundPage from "./not-found/not-found.page";
import LandingPage from "./landing/landing.page";

export default class AppModule extends Component {
   render() {
      return (
         <Suspense fallback={"loading..."}>
            <Routes>
               <Route path="/" element={<LandingPage />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </Suspense>
      );
   }
}
