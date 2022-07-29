import React, { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchSuggest, fetchWeather } from "../store/reducers/ActionCreators";
import MainInput from "./UI/MainInput";

const MainForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");

  const changeHandler = (data: string) => {
    setValue(data);
    debounce(data);
  };

  const debounce = useCallback(
    _.debounce((data) => dispatch(fetchSuggest(data)), 500),
    []
  );

  return (
    <form>
      <MainInput
        changeHandler={changeHandler}
        inputType={"search"}
        value={value}
      />
    </form>
  );
};

export default MainForm;
