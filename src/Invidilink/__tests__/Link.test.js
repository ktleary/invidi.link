import { render, screen } from "@testing-library/react";
import Link from "../components/Link";

test("renders a supplied link", () => {
  const url = "https://invidious.tube/watch?v=hY7m5jjJ9mM";
  render(<Link link={url} />);
  const linkElement = screen.getByText(url);
  expect(linkElement).toBeInTheDocument();
});
