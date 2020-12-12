import { render, screen } from "@testing-library/react";
import Result from "../components/Result";
import { validateUrl } from "../utils/validate";

test("renders a supplied link", () => {
  const goodInstances = [
    "https://domain1.xyz",
    "https://domain2.xyz",
    "https://domain3.xyz",
  ];
  const url = "https://inviodus.snoptya.org/watch?v=123";
  const status = "6 invidious found";
  render(<Result status={status} goodUrls={goodInstances} url={url} validateUrl={validateUrl} />);
  const linkElement = screen.getByText(url);
  expect(linkElement).toBeInTheDocument();
});
