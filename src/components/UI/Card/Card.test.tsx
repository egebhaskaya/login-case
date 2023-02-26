import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("render popup and close it", async () => {
  render(<Card mode="Login" />);
  const cardContainer = screen.getByTestId("card");
  expect(cardContainer).toBeInTheDocument();
});
