import React, { useEffect } from "react";
import _ from "lodash";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchSuggest, fetchWeather } from "./store/reducers/ActionCreators";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const { error, isLoading, suggestions } = useAppSelector(
    (state) => state.suggestReducer
  );
  const {
    error: weatherError,
    isLoading: weatherIsLoading,
    weather,
  } = useAppSelector((state) => state.weatherReducer);
  const { currentWeather } = weather;

  useEffect(() => {
    dispatch(fetchSuggest());
  }, []);

  const getWeather = (id: string) => (e: React.MouseEvent) => {
    dispatch(fetchWeather(id));
  };

  return (
    <div className='App'>
      <h1>WORKS</h1>
      {suggestions.map(({ id, city, county, country }) => {
        return (
          <h1 key={_.uniqueId()} onClick={getWeather(id)}>
            {city}, {county}, {country}
          </h1>
        );
      })}
      <div>
        <h1>Погода сегодня</h1>
        <p>
          Температура - {currentWeather.temp}, Код погоды -{" "}
          {currentWeather.weatherCode}, Скорость ветра -{" "}
          {currentWeather.windSpeed}, Направление ветра -{" "}
          {currentWeather.windDirection}
        </p>
      </div>
    </div>
  );
}

export default App;
