import { IInput } from "./Input";

const Green: IInput = {
  inputMode: "Login",
  inputPlaceHolder: "Test",
  inputType: "text",
  name: "test",
  onChange: () => console.log("test"),
  value: "",
};
const Red: IInput = {
  inputMode: "Register",
  inputPlaceHolder: "Test",
  inputType: "text",
  name: "test",
  onChange: () => console.log("test"),
  value: "",
};

export const mockInputprops = {
  Green,
  Red,
};
