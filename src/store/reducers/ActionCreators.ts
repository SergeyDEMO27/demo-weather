import axios from "axios";
import { ISuggest } from "../../models/ISuggest";
import { suggestParser } from "../../parsers/suggestParser";
import { locationParser } from "../../parsers/locationParser";
import { weatherParser } from "../../parsers/weatherParser";
import { AppDispatch } from "../store";
import { suggestSlice } from "./SuggestSlice";
import { weatherSlice } from "./WeatherSlice";

export interface IResponse {
  suggestions: any[];
}

export const fetchSuggest = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(suggestSlice.actions.suggestFetching());
    const response = await axios.get<IResponse>(
      "https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?query=Ростов&apiKey=Yclju9FXL_oqwM7jvUbPyHpbNQnqSgdDWNR-qg-Rm_E"
    );
    const parsedResponse = suggestParser(response.data);
    dispatch(suggestSlice.actions.suggestFetchingSuccess(parsedResponse));
  } catch (e) {
    dispatch(
      suggestSlice.actions.suggestFetchingError(
        "Произошла ошибка при поиске города"
      )
    );
  }
};

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
    dispatch(weatherSlice.actions.weatherFetchingSuccess(parsedWeather));
  } catch (e) {
    dispatch(
      suggestSlice.actions.suggestFetchingError(
        "Произошла ошибка при загрузке погоды"
      )
    );
  }
};
