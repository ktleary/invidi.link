import { render, screen } from "@testing-library/react";
import Invidilink from "../invidilink";

test("renders invidilink header", () => {
  render(<Invidilink />);
  const linkElement = screen.getByText(/invidilink/i);
  expect(linkElement).toBeInTheDocument();
});

test("it renders the about link", () => {
  render(<Invidilink />);
  const aboutLinkElement = screen.getByTestId("about-link");
  expect(aboutLinkElement).toBeInTheDocument();
});

test("it renders the clear button", () => {
  render(<Invidilink />);
  const clearButtonElement = screen.getByTestId("button-clear");
  expect(clearButtonElement).toBeInTheDocument();
});

test("it renders the entry input", () => {
  render(<Invidilink />);
  const clearButtonElement = screen.getByTestId("input-entry");
  expect(clearButtonElement).toBeInTheDocument();
});
