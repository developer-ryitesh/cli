import { Component, Suspense } from "react";
import { ReduxLogger } from "../utils";
import AppRoutingModule from "./app.routing.module";

export const storeConfig = {
   reducers: {},
   middlewares: [ReduxLogger],
} as const;

export default class AppModule extends Component {
   render() {
      return (
         <Suspense fallback={"loading..."}>
            <AppRoutingModule />
         </Suspense>
      );
   }
}
