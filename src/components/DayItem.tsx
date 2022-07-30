import React from "react";
interface DayItemProps {
  precipitation: number;
  tempMax: number;
  tempMin: number;
  time: string;
  weatherCode: number;
}

const DayItem: React.FC<DayItemProps> = ({
  precipitation,
  tempMax,
  tempMin,
  time,
  weatherCode,
}) => {
  return (
    <div>
      <div>{time}</div>
      <div>{weatherCode}</div>
      <div>
        <div>{Math.ceil(tempMax)}</div>
        <div>{Math.ceil(tempMin)}</div>
      </div>
    </div>
  );
};

export default DayItem;
