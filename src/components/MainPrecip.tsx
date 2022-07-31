import React from "react";
import _ from "lodash";
import { IHourly } from "../models/IHourly";
import { getTotalPrecip } from "../utils/utils";
import "../styles/MainPrecip.scss";

interface MainPrecipProps {
  selectedDay: IHourly;
}

const MainPrecip: React.FC<MainPrecipProps> = ({ selectedDay }) => {
  return (
    <div className='main-precip'>
      <h2 className='main-precip__title'>Precipitation</h2>
      <ul className='main-precip__list'>
        {selectedDay.precipitation.map((item) => {
          return <li key={_.uniqueId()}>{item}</li>;
        })}
      </ul>
      <div>
        the total daily volume of {getTotalPrecip(selectedDay.precipitation)}
      </div>
    </div>
  );
};

export default MainPrecip;
