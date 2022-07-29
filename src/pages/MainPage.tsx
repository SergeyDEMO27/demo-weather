import React, { useEffect } from "react";
import _ from "lodash";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchSuggest, fetchWeather } from "../store/reducers/ActionCreators";
import MainForm from "../components/MainForm";
import MainSuggest from "../components/MainSuggest";

const MainPage: React.FC = () => {
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

  //   useEffect(() => {
  //     dispatch(fetchSuggest());
  //   }, []);

  const getWeather = (id: string) => (e: React.MouseEvent) => {
    dispatch(fetchWeather(id));
  };

  return (
    <div className='App'>
      <MainForm />
      <MainSuggest />
      {/* <div>
        <h1>Погода сегодня</h1>
        <p>
          Температура - {currentWeather.temp}, Код погоды -{" "}
          {currentWeather.weatherCode}, Скорость ветра -{" "}
          {currentWeather.windSpeed}, Направление ветра -{" "}
          {currentWeather.windDirection}
        </p>
      </div> */}
    </div>
  );
};

export default MainPage;
