import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("renders invidilink", () => {
  const toggleAbout = jest.fn();
  render(<About toggleAbout={toggleAbout} />);
  const linkElement = screen.getByText(/invidilink/i);
  expect(linkElement).toBeInTheDocument();
});

