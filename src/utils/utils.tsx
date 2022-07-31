import { IHourly } from "../models/IHourly";

export const getDaysData = (startIndex: number, data: IHourly) => {
  const dataKeys = Object.keys(data);

  const result = dataKeys.reduce<IHourly>(
    (acc, key) => {
      for (let i = startIndex * 24; i < startIndex * 24 + 24; i += 1) {
        acc[key] = acc.hasOwnProperty(key)
          ? [...acc[key], data[key][i]]
          : [data[key][i]];
      }
      return acc;
    },
    {
      precipitation: [],
      pressure: [],
      temperature: [],
      time: [],
      weatherCode: [],
      windSpeed: [],
    }
  );

  return result;
};

export const getTotalPrecip = (data: Array<number>): string => {
  const result = data.reduce((acc, number) => (acc += number), 0);
  return result === 0 ? result.toString() : result.toFixed(1);
};
