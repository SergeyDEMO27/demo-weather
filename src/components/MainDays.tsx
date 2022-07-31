import React from "react";
import _ from "lodash";
import { useAppSelector } from "../hooks/redux";
import DayItem from "./DayItem";
import "../styles/MainDays.scss";

interface MainDaysProps {
  activeDayHandler: (index: number) => void;
}

const MainDays: React.FC<MainDaysProps> = ({ activeDayHandler }) => {
  const { weather } = useAppSelector((state) => state.weatherReducer);
  const { dailyWeather } = weather;

  return (
    <ul className='main-days'>
      {dailyWeather.time.map((item, index) => {
        return (
          <li key={_.uniqueId()} onClick={() => activeDayHandler(index)}>
            <DayItem
              precipitation={dailyWeather.precipitation[index]}
              tempMax={dailyWeather.tempMax[index]}
              tempMin={dailyWeather.tempMin[index]}
              time={dailyWeather.time[index]}
              weatherCode={dailyWeather.weatherCode[index]}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MainDays;
