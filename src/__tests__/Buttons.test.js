import { render } from "@testing-library/react";
import CopyButton from "../components/buttons/CopyButton";
import ClearButton from "../components/buttons/ClearButton";
import RandomButton from "../components/buttons/ClearButton";

import Controls from "../components/Controls";

test("it renders the CopyButton", () => {
  render(<CopyButton />);
});

test("it renders the Clear Button", () => {
  render(<ClearButton />);
});

test("it renders the GetRandom Button", () => {
  render(<RandomButton />);
});

test("it renders Controls", () => {
  const { handleClear, handleReload, url } = {
    handleClear: () => {},
    handleReload: () => {},
    url: "https://abc.xyz?v=123",
  };
  render(
    <Controls handleClear={handleClear} handleReload={handleReload} url={url} />
  );
});
