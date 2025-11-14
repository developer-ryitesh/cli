import { Component, Suspense } from "react";
import { Route, Routes } from "react-router";
import { combineReducers } from "@reduxjs/toolkit";

const Routing = () => (
   <Routes>
      <Route index element={<p>PlaceHolder page</p>} />
   </Routes>
);

const placeHolderReducers = combineReducers({
   // + add placeHolder Reducer ex- name : exampleReducer
});

class PlaceHolderModule extends Component {
   render() {
      return (
         <Suspense fallback={"loading..."}>
            <Routing />
         </Suspense>
      );
   }
}

export { placeHolderReducers };
export default PlaceHolderModule;
