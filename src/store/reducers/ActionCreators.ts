import axios from "axios";
import { ISuggest } from "../../models/ISuggest";
import { suggestParser } from "../../parsers/suggestParser";
import { locationParser } from "../../parsers/locationParser";
import { weatherParser } from "../../parsers/weatherParser";
import { AppDispatch } from "../store";
import { suggestSlice } from "./SuggestSlice";
import { weatherSlice } from "./WeatherSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface IResponse {
  suggestions: any[];
}

// export const fetchSuggest =
//   (value: string) => async (dispatch: AppDispatch) => {
//     try {
//       console.log(value);
//       dispatch(suggestSlice.actions.suggestFetching());
//       const response = await axios.get<IResponse>(
//         `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?query=${value}&apiKey=Yclju9FXL_oqwM7jvUbPyHpbNQnqSgdDWNR-qg-Rm_E`
//       );
//       const parsedResponse = suggestParser(response.data);
//       dispatch(suggestSlice.actions.suggestFetchingSuccess(parsedResponse));
//     } catch (e) {
//       dispatch(
//         suggestSlice.actions.suggestFetchingError(
//           "Произошла ошибка при поиске города"
//         )
//       );
//     }
//   };

export const fetchSuggest = createAsyncThunk(
  "suggest/fetchAll",
  async (value: string) => {
    console.log(value);
    const response = await axios.get<IResponse>(
      `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?query=${value}&apiKey=Yclju9FXL_oqwM7jvUbPyHpbNQnqSgdDWNR-qg-Rm_E`
    );
    return suggestParser(response.data);
  }
);

export const fetchWeather = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(weatherSlice.actions.weatherFetching());
    const locationResponse = await axios.get(
      `https://geocode.search.hereapi.com/v1/geocode?q=${id}&apiKey=Yclju9FXL_oqwM7jvUbPyHpbNQnqSgdDWNR-qg-Rm_E`
    );

    const { latitude, longtitude } = locationParser(locationResponse.data);
    const weatherResponse = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longtitude}&hourly=temperature_2m,pressure_msl,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_hours&current_weather=true&windspeed_unit=ms&timezone=Europe%2FMoscow&past_days=0`
    );
    const parsedWeather = weatherParser(weatherResponse.data);
    // const utcTime = new Date().toLocaleTimeString("en-GB", {
    //   timeZone: "UTC",
    //   hour: "2-digit",
    //   minute: "2-digit",
    // });
    // const timeNow =
    //   Number(utcTime.split(":")[0]) * 3600 +
    //   Number(utcTime.split(":")[1]) * 60 +
    //   weatherResponse.data.utc_offset_seconds;
    // console.log(timeNow);
    // console.log(new Date(timeNow * 1000).toISOString().slice(11, 16));
    // console.log(utcTime.split(':')[0] + weatherResponse.data.utc_offset_seconds / 3600);
    dispatch(weatherSlice.actions.weatherFetchingSuccess(parsedWeather));
  } catch (e) {
    dispatch(
      weatherSlice.actions.weatherFetchingError(
        "Произошла ошибка при загрузке погоды"
      )
    );
  }
};
