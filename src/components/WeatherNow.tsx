import React from "react";
import { useAppSelector } from "../hooks/redux";

const WeatherNow: React.FC = () => {
  const { weather } = useAppSelector((state) => state.weatherReducer);
  const { currentWeather } = weather;

  return (
    <div>
      <h1>Погода сегодня</h1>
      <p>
        Температура - {currentWeather.temp}, Код погоды -{" "}
        {currentWeather.weatherCode}, Скорость ветра -{" "}
        {currentWeather.windSpeed}, Направление ветра -{" "}
        {currentWeather.windDirection}
      </p>
    </div>
  );
};

export default WeatherNow;
