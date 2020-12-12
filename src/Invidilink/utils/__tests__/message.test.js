import { statusMessage } from "../message";
import { STATUS } from "../../constants";

test("it should create a retrieving instances status message", () => {
  const message = statusMessage({ type: STATUS.RETRIEVINGINSTANCES });

  expect(STATUS.RETRIEVINGINSTANCES).toEqual(message);
});

test("it should create an instances available status message with a count", () => {
  const message = statusMessage({
    type: STATUS.INSTANCESAVAILABLE,
    quantity: 7,
  });
  const expected = `7 ${STATUS.INSTANCESAVAILABLE}`;

  expect(expected).toEqual(message);
});
