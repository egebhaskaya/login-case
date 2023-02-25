import { render, screen } from "@testing-library/react";
import Tabbar from "./Tabbar";

test("renders Giriş Yap by default", () => {
  render(<Tabbar setPageMode={() => "Login"} />);
  const inputPlaceholder = screen.getByText("Giriş Yap");
  expect(inputPlaceholder).toBeInTheDocument();
});
