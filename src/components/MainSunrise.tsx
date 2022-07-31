import React from "react";
import _ from "lodash";
import { IHourly } from "../models/IHourly";
import { getTotalPrecip } from "../utils/utils";
import "../styles/MainWind.scss";

interface MainSunriseProps {
  sunrise: string;
  sunset: string;
}

const MainSunrise: React.FC<MainSunriseProps> = ({ sunrise, sunset }) => {
  return (
    <div className='main-sunrise'>
      <h2>Sunrise and Sunset</h2>
      <div>{sunrise}</div>
      <div>{sunset}</div>
    </div>
  );
};

export default MainSunrise;
