import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeather } from "../../models/IWeather";

interface WeatherState {
  weather: IWeather;
  isLoading: boolean;
  error: string;
}

const initialState: WeatherState = {
  weather: {
    currentWeather: {
      temp: 0,
      weatherCode: 0,
      windDirection: 0,
      windSpeed: 0,
    },
    dailyWeather: {
      precipitation: [],
      tempMax: [],
      tempMin: [],
      time: [],
      weatherCode: [],
    },
    hourlyWeather: {
      precipitation: [],
      pressure: [],
      temperature: [],
      time: [],
      weatherCode: [],
      windSpeed: [],
    },
  },
  isLoading: false,
  error: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    weatherFetching(state) {
      state.isLoading = true;
    },
    weatherFetchingSuccess(state, action: PayloadAction<IWeather>) {
      state.isLoading = false;
      state.error = "";
      state.weather = action.payload;
    },
    weatherFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default weatherSlice.reducer;
