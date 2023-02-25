import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("render popup and close it", async () => {
  render(<Button buttonText="Giriş Yap" buttonType="button" mode="Login" />);
  const buttonElement = screen.getByTestId("button");
  expect(buttonElement).toBeInTheDocument();
});
