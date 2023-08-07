import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";

// Import global slice
import globalReducer from "./global"
// import team slice
import teamReducer from "./team"

// Combine all reducer into one
const reducer = combineReducers({
  globalReducer,
  teamReducer
});

// Initialize store with all the combined reducers
const store = configureStore({
  reducer,
});

// Typescript types of the dispatch and states
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// useDispatch and useSelector hooks with types
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// State selector for the team slice with types
export const teamSelector = (state: RootState) => state.teamReducer;
// State selector for the global slice with types
export const globalSelector = (state: RootState) => state.globalReducer;

export default store;