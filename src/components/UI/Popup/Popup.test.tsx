import { render, screen } from "@testing-library/react";
import Popup from "../Popup/Popup";

test("render popup and close it", async () => {
  render(<Popup open={true} setOpen={() => ""} />);
  const buttonElement = screen.getByTestId("closeButton");
  expect(buttonElement).toBeInTheDocument();
});
