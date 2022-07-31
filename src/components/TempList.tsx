import React from "react";
import _ from "lodash";
import { IHourly } from "../models/IHourly";
import "../styles/TempList.scss";

interface TempListProps {
  selectedDay: IHourly;
}

const TempList: React.FC<TempListProps> = ({ selectedDay }) => {
  return (
    <ul className='temp-list'>
      {selectedDay.time.map((item, index) => {
        return (
          <li key={_.uniqueId()}>
            <div>
              <div>{selectedDay.temperature[index]}</div>
              <div>{selectedDay.weatherCode[index]}</div>
              <div>{selectedDay.time[index]}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TempList;
