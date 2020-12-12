import { statusMessage } from "../message";
import { STATUS } from "../../constants";

test("if no message is supplied, it should return empty string", () => {
  const message = statusMessage({});
  expect(message).toEqual("");
});

test("if no count is supplied to INSTANCESAVAILABLE, return without count.", () => {
  const message = statusMessage({ type: STATUS.INSTANCESAVAILABLE });
  expect(message).toEqual(STATUS.INSTANCESAVAILABLE);
});

test("it should create a CLIPBOARDNOTAVAILABLE status message", () => {
  const message = statusMessage({ type: STATUS.CLIPBOARDNOTAVAILABLE });

  expect(STATUS.CLIPBOARDNOTAVAILABLE).toEqual(message);
});

test("it should create a BADDATA status message", () => {
  const message = statusMessage({ type: STATUS.BADDATA });

  expect(STATUS.BADDATA).toEqual(message);
});

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

test("it should create a link copied!  status message", () => {
  const message = statusMessage({
    type: STATUS.LINKCOPIED,
  });

  expect(STATUS.LINKCOPIED).toEqual(message);
});

test("it should create an error retrieving status message", () => {
  const message = statusMessage({
    type: STATUS.ERRORRETRIEVING,
  });

  expect(STATUS.ERRORRETRIEVING).toEqual(message);
});
