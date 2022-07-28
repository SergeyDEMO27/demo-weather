import { combineReducers, configureStore } from "@reduxjs/toolkit";
import suggestReducer from "./reducers/SuggestSlice";
import weatherReducer from "./reducers/WeatherSlice";

const rootReducer = combineReducers({
  suggestReducer,
  weatherReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
