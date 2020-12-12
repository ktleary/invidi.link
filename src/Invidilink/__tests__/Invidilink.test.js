import { render, screen } from "@testing-library/react";
import Invidilink from "../Invidilink";

test("renders Invidilink", () => {
  render(<Invidilink />);
  const invidilinkElement = screen.getByTestId("invidilink-wrapper");
  expect(invidilinkElement).toBeInTheDocument();
});
