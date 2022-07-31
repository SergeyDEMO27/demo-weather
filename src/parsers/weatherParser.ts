import { IWeather } from "../models/IWeather";

interface weatherInterface {
  current_weather: {
    temperature: number;
    weathercode: number;
    winddirection: number;
    windspeed: number;
  };
  daily: {
    precipitation_hours: Array<number>;
    temperature_2m_max: Array<number>;
    temperature_2m_min: Array<number>;
    time: Array<string>;
    sunrise: Array<string>;
    sunset: Array<string>;
    weathercode: Array<number>;
  };
  hourly: {
    precipitation: Array<number>;
    pressure_msl: Array<number>;
    temperature_2m: Array<number>;
    time: Array<string>;
    weathercode: Array<number>;
    windspeed_10m: Array<number>;
  };
}

export const weatherParser = (data: weatherInterface): IWeather => {
  return {
    currentWeather: {
      temp: data.current_weather.temperature,
      weatherCode: data.current_weather.weathercode,
      windDirection: data.current_weather.winddirection,
      windSpeed: data.current_weather.windspeed,
    },
    dailyWeather: {
      precipitation: data.daily.precipitation_hours,
      tempMax: data.daily.temperature_2m_max,
      tempMin: data.daily.temperature_2m_min,
      time: data.daily.time,
      sunrise: data.daily.sunrise,
      sunset: data.daily.sunset,
      weatherCode: data.daily.weathercode,
    },
    hourlyWeather: {
      precipitation: data.hourly.precipitation,
      pressure: data.hourly.pressure_msl,
      temperature: data.hourly.temperature_2m,
      time: data.hourly.time,
      weatherCode: data.hourly.weathercode,
      windSpeed: data.hourly.windspeed_10m,
    },
  };
};
