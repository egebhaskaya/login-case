import React, { FC } from "react";
import "../../../styles/index.scss";
import cn from "classnames";

export interface IButton {
  mode: string;
  buttonText: string;
  buttonType: "submit" | "reset" | "button";
  onClick?: () => void;
}

const Button: FC<IButton> = (props) => {
  //mode changes styles
  const { mode, buttonType, buttonText, onClick } = props;

  return (
    <button
      data-testid="button"
      type={buttonType}
      className={cn([
        mode === "Login" && "button-green",
        mode === "Register" && "button-red",
      ])}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
