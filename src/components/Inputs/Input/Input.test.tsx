import { render, screen } from "@testing-library/react";
import Input from "./Input";

test("render popup and close it", async () => {
  render(
    <Input
      inputMode="Login"
      inputPlaceHolder="test"
      inputType="text"
      name="test"
      value=""
      onChange={() => ""}
    />
  );
  const buttonElement = screen.getByTestId("input");
  expect(buttonElement).toBeInTheDocument();
});
