import { Component, Suspense } from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./landing/landing.page";
import NotFoundPage from "./not-found/not-found.page";
import { ReduxLogger } from "../utils";

const Routing = () => (
   <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFoundPage />} />
   </Routes>
);

export default class AppModule extends Component {
   render() {
      return (
         <Suspense fallback={"loading..."}>
            <Routing />
         </Suspense>
      );
   }
}

export const appConfig = {
   store: {
      reducers: {},
      middlewares: [ReduxLogger],
   },
   api: {
      baseURL: "",
      interceptors: [],
   },
} as const;
