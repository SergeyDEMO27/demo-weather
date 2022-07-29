import React from "react";
import _ from "lodash";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchSuggest, fetchWeather } from "../store/reducers/ActionCreators";

const MainSuggest: React.FC = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading, suggestions } = useAppSelector(
    (state) => state.suggestReducer
  );

  const getWeather = (id: string) => (e: React.MouseEvent) => {
    dispatch(fetchWeather(id));
  };

  return (
    <ul>
      {suggestions.map(({ id, city, county, country }) => {
        return (
          <li key={_.uniqueId()}>
            <h1 onClick={getWeather(id)}>
              {city}, {county}, {country}
            </h1>
          </li>
        );
      })}
    </ul>
  );
};

export default MainSuggest;
