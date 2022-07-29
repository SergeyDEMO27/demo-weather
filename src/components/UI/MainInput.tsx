import React from "react";

interface MainInputProps {
  changeHandler: (data: string) => void;
  inputType: string;
  value: string;
}

const MainInput: React.FC<MainInputProps> = ({
  changeHandler,
  inputType,
  value,
}) => {
  return (
    <input
      onChange={(e) => changeHandler(e.target.value)}
      type={inputType}
      value={value}
    />
  );
};

export default MainInput;
