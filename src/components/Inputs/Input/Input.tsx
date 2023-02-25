import React, { FC, HTMLInputTypeAttribute } from "react";
import "../../../styles/index.scss";
import cn from "classnames";

export interface IInput {
  inputType: HTMLInputTypeAttribute;
  inputPlaceHolder: string;
  inputMode: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: FC<IInput> = (props) => {
  const { name, inputType, inputPlaceHolder, inputMode, onChange, value } =
    props;
  return (
    <input
      data-testid="input"
      value={value}
      name={name}
      className={cn([
        inputMode === "Login" && "input-green",
        inputMode === "Register" && "input-red",
      ])}
      onChange={onChange}
      type={inputType}
      autoComplete="off"
      required
      placeholder={inputPlaceHolder}
    />
  );
};

export default Input;
