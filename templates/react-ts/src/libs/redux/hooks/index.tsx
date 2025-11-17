import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, RootState } from "../types";
import type store from "../store";

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();
const useAppStore = useStore.withTypes<typeof store>();

export { useAppDispatch, useAppSelector, useAppStore };
