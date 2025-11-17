import { Component } from "react";
import { Route, Routes, Outlet } from "react-router";
import { LazyReducers } from "@/libs/redux/utils";
import { useSelector } from "react-redux";

const placeHolderReducers = LazyReducers({
   name: "placeHolder",
   reducers: {
      // name: Reducer,
   },
});

export const usePlaceHolderModule = useSelector.withTypes<{
   admin: ReturnType<typeof placeHolderReducers>;
}>();

export default class PlaceHolderModule extends Component {
   render() {
      return (
         <Routes>
            <Route element={<Outlet />}>
               <Route index element={<p>PlaceHolder page</p>} />
            </Route>
            <Route path="*" element={<p>404</p>} />
         </Routes>
      );
   }
}
