import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchSuggest } from "./store/reducers/ActionCreators";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const { error, isLoading, suggestions } = useAppSelector(
    (state) => state.suggestReducer
  );

  useEffect(() => {
    dispatch(fetchSuggest());
  }, []);

  return (
    <div className='App'>
      <h1>WORKS</h1>
      {suggestions.map(({ id, city, county, country }) => {
        return (
          <h1 key={id}>
            {city}, {county}, {country}
          </h1>
        );
      })}
    </div>
  );
}

export default App;
