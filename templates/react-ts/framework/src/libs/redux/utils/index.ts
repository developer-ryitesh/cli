import { combineReducers } from "@reduxjs/toolkit";
import store from "../store";

function createReducerManager<T>(initialReducers: T) {
   const reducers = { ...initialReducers };
   let combinedReducer = combineReducers(reducers);
   return {
      getReducerMap: () => reducers,
      reduce: (state: any, action: any) => combinedReducer(state, action),
      add: (key: string, reducer: any) => {
         // @ts-ignore
         if (!key || reducers[key]) return;
         // @ts-ignore
         reducers[key] = reducer;
         combinedReducer = combineReducers(reducers);
      },
   };
}

type Param<ReducersType, Names = any> = {
   name: Names;
   reducers: ReducersType;
};
function LazyReducers<ReducersType>({ name, reducers }: Param<ReducersType>) {
   const cr = combineReducers(reducers);
   store.reducerManager.add(name, cr);
   const type = "@@" + name.toUpperCase() + "/INIT";
   store.dispatch({ type });
   return cr;
}

export { createReducerManager, LazyReducers };
