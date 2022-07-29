import React from "react";
import { useAppSelector } from "../hooks/redux";
import MainForm from "../components/MainForm";
import MainSuggest from "../components/MainSuggest";
import WeatherNow from "../components/WeatherNow";
import "../styles/MainPage.scss";

const MainPage: React.FC = () => {
  const { error, isLoading } = useAppSelector((state) => state.suggestReducer);
  const { error: weatherError, isLoading: weatherIsLoading } = useAppSelector(
    (state) => state.weatherReducer
  );

  return (
    <div className='main-page'>
      <MainForm />
      <MainSuggest />
      <WeatherNow />
    </div>
  );
};

export default MainPage;
