import { render, screen } from "@testing-library/react";
import Result from "../components/Result";

test("renders a supplied link", () => {
  const url = "https://inviodus.snoptya.org/watch?v=123";
  const handleCopyLink = () => {};
  const availableInstances = [
    "https://domain1.xyz",
    "https://domain2.xyz",
    "https://domain3.xyz",
  ];
  const replacedUrl = `${availableInstances[1]}/watch?v=123`

  render(
    <Result
      availableInstances={availableInstances}
      url={url}
      handleCopyLink={handleCopyLink}
    />
  );
  const linkElement = screen.getByText(replacedUrl);
  expect(linkElement).toBeInTheDocument();
});
