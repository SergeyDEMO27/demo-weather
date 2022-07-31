export interface IWeather {
  currentWeather: {
    temp: number;
    weatherCode: number;
    windDirection: number;
    windSpeed: number;
  };
  dailyWeather: {
    precipitation: Array<number>;
    tempMax: Array<number>;
    tempMin: Array<number>;
    time: Array<string>;
    sunrise: Array<string>;
    sunset: Array<string>;
    weatherCode: Array<number>;
  };
  hourlyWeather: {
    precipitation: Array<number>;
    pressure: Array<number>;
    temperature: Array<number>;
    time: Array<string>;
    weatherCode: Array<number>;
    windSpeed: Array<number>;
  };
}
