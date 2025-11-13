import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector, useStore } from "react-redux";
import type { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { appConfig } from "../app/app.module";

const store = configureStore({
   reducer: appConfig.store.reducers,
   middleware: (getMiddleware) => getMiddleware().concat([...appConfig.store.middlewares]),
});

function StoreProvider({ children }: { children: React.ReactNode }) {
   return <Provider store={store}>{children}</Provider>;
}

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();
const useAppStore = useStore.withTypes<typeof store>();
type ReducerType<T> = ActionReducerMapBuilder<T>;

/*-----[export]----*/
export type { ReducerType };
export { useAppDispatch, useAppSelector, useAppStore, StoreProvider, store };
