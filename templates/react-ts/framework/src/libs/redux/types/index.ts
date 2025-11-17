import type { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import store from "../store";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type BuilderType<T> = ActionReducerMapBuilder<T>;

export type { RootState, AppDispatch, BuilderType };
