import { configureStore } from "@reduxjs/toolkit";
import config from "@/app/config";
import { createReducerManager } from "../utils";

const makeStore = () => {
   const reducerManager = createReducerManager<typeof config.reducers>(config.reducers);
   const store = configureStore({
      reducer: reducerManager.reduce,
      middleware: (m) => m().concat([...config.middlewares]),
   });
   type StoreWithManager = typeof store & { reducerManager: ReturnType<typeof createReducerManager> };
   (store as StoreWithManager).reducerManager = reducerManager;
   return store as StoreWithManager;
};

const store = makeStore();
export default store;
