import { render, screen } from "@testing-library/react";
import Status from "../components/Status";
import { STATUS } from "../constants";
import { statusMessage } from "../utils/message";

test("it shows a status of 6 instances available", () => {
  const quantity = 6;
  const status = statusMessage({ type: STATUS.INSTANCESAVAILABLE, quantity });
  render(<Status status={status} />);

  const statusElement = screen.getByText(status);
  expect(statusElement).toBeInTheDocument();
});
