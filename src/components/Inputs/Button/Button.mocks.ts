import { IButton } from "./Button";

const Green: IButton = {
  buttonText: "Test",
  buttonType: "button",
  mode: "Login",
  onClick: () => console.log("test"),
};

const Red: IButton = {
  buttonText: "Test",
  buttonType: "button",
  mode: "Register",
  onClick: () => console.log("test"),
};

export const mockButtonprops = {
  Red,
  Green,
};
