import { combineReducers, configureStore } from "@reduxjs/toolkit";
import suggestReducer from "./reducers/SuggestSlice";

const rootReducer = combineReducers({
  suggestReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
