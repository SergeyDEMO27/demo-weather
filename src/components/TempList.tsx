import React from "react";
import _ from "lodash";
import { useAppSelector } from "../hooks/redux";
import { getDaysData } from "../utils/utils";
import "../styles/TempList.scss";

const TempList: React.FC = () => {
  const { weather } = useAppSelector((state) => state.weatherReducer);
  const { hourlyWeather } = weather;
  const dailyChunk = hourlyWeather.time.slice(0, 24);
  const selectedDayData = getDaysData(0, hourlyWeather);

  return (
    <ul className='temp-list'>
      {dailyChunk.map((item, index) => {
        return (
          <li key={_.uniqueId()}>
            <div>
              <div>{hourlyWeather.temperature[index]}</div>
              <div>{hourlyWeather.weatherCode[index]}</div>
              <div>{hourlyWeather.time[index]}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TempList;
