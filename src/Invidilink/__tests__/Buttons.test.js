import { render } from "@testing-library/react";
import CopyButton from "../components/CopyButton";
import Controls from "../components/Controls";

test("it renders the CopyButton", () => {
  render(<CopyButton />);
});

test("it renders Controls", () => {
  const { handleClear, handleReload, url } = {
    handleClear: () => {},
    handleReload: () => {},
    url: "https://abc.xyz?v=123",
  };
  render(
    <Controls
      handleClear={handleClear}
      handleReload={handleReload}
      url={url}
    />
  );
});
