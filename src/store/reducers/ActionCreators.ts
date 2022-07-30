import axios from "axios";
import { suggestParser } from "../../parsers/suggestParser";
import { locationParser } from "../../parsers/locationParser";
import { weatherParser } from "../../parsers/weatherParser";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface IResponse {
  suggestions: any[];
}

export const fetchSuggest = createAsyncThunk(
  "suggest/fetchAll",
  async (value: string) => {
    if (!value) {
      return [];
    }
    const response = await axios.get<IResponse>(
      `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?query=${value}&apiKey=Yclju9FXL_oqwM7jvUbPyHpbNQnqSgdDWNR-qg-Rm_E`
    );
    return suggestParser(response.data);
  }
);

export const fetchWeather = createAsyncThunk(
  "weather/fetchAll",
  async (id: string) => {
    const locationResponse = await axios.get(
      `https://geocode.search.hereapi.com/v1/geocode?q=${id}&apiKey=Yclju9FXL_oqwM7jvUbPyHpbNQnqSgdDWNR-qg-Rm_E`
    );
    const { latitude, longtitude } = locationParser(locationResponse.data);
    const weatherResponse = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longtitude}&hourly=temperature_2m,pressure_msl,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_hours&current_weather=true&windspeed_unit=ms&timezone=Europe%2FMoscow&past_days=0`
    );
    console.log(weatherResponse.data);
    return weatherParser(weatherResponse.data);
  }
);
