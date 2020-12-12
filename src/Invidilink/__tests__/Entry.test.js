import { render, screen } from "@testing-library/react";
import Entry from "../components/Entry";

test("renders the component", () => {
  const { dataid, handleInputChange, url } = {
    url: "https://domain1.xyz?v=123",
    handleInputChange: () => {},
    dataid: "entry-input",
  };

  render(<Entry handleInputChange={handleInputChange} url={url} />);
  const entryElement = screen.getByTestId(dataid);
  expect(entryElement).toBeInTheDocument();
});
