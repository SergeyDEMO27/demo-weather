import React, { useCallback, useState } from "react";
import _ from "lodash";
import { useAppDispatch } from "../hooks/redux";
import { fetchSuggest } from "../store/reducers/ActionCreators";
import MainInput from "./UI/MainInput";

const MainForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");

  const changeHandler = (data: string) => {
    setValue(data);
    debounce(data);
  };

  const debounce = useCallback(
    _.debounce((data: string) => dispatch(fetchSuggest(data)), 500),
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
