import React, { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import MainForm from "../components/MainForm";
import MainSuggest from "../components/MainSuggest";
import WeatherNow from "../components/WeatherNow";
import MainDays from "../components/MainDays";
import TempList from "../components/TempList";
import MainPrecip from "../components/MainPrecip";
import MainWind from "../components/MainWind";
import MainSunrise from "../components/MainSunrise";
import { getDaysData } from "../utils/utils";
import { IHourly } from "../models/IHourly";
import "../styles/MainPage.scss";

const MainPage: React.FC = () => {
  const { weather } = useAppSelector((state) => state.weatherReducer);
  const [activeDay, setActiveDay] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<IHourly>(
    getDaysData(0, weather.hourlyWeather)
  );

  useEffect(() => {
    setSelectedDay(getDaysData(0, weather.hourlyWeather));
  }, [weather]);

  const activeDayHandler = (index: number) => {
    setActiveDay(index);
    setSelectedDay(getDaysData(index, weather.hourlyWeather));
  };

  console.log(weather);

  return (
    <div className='main-page'>
      <MainForm />
      <MainSuggest />
      <WeatherNow />
      <TempList selectedDay={selectedDay} />
      <MainDays activeDayHandler={activeDayHandler} />
      <MainPrecip selectedDay={selectedDay} />
      <MainWind selectedDay={selectedDay} />
      <MainSunrise
        sunrise={weather.dailyWeather.sunrise[activeDay]}
        sunset={weather.dailyWeather.sunset[activeDay]}
      />
    </div>
  );
};

export default MainPage;
