import React from "react";
import _ from "lodash";
import { IHourly } from "../models/IHourly";
import { getTotalPrecip } from "../utils/utils";
import "../styles/MainWind.scss";

interface MainWindProps {
  selectedDay: IHourly;
}

const MainWind: React.FC<MainWindProps> = ({ selectedDay }) => {
  return (
    <div className='main-wind'>
      <h2 className='main-wind__title'>Wind</h2>
      <div></div>
      <ul className='main-wind__list'>
        {selectedDay.windSpeed.map((item) => {
          return <li key={_.uniqueId()}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default MainWind;
