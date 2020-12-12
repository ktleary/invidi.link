import fetchMock from "jest-fetch-mock";
import { getAvailableInstances } from "../http";
import { endpoint } from "../../constants";
import instanceData from "../../../data/instance-data-sample";

beforeEach(() => {
  fetchMock.enableMocks();
  fetch.resetMocks();
});

it("retrieves available instances", async () => {
  fetch.mockResponseOnce(JSON.stringify(instanceData));

  const results = await getAvailableInstances();
  const firstInstance = results[0][0];

  expect(firstInstance).toBe("invidious.snopyta.org");
  expect(fetch).toHaveBeenCalledTimes(1);
});

it("returns error when exception", async () => {
  fetch.mockReject(() =>
    Promise.reject({ name: "NetworkError", message: "Api is down" })
  );

  const results = await getAvailableInstances();
  expect(results.error).toEqual("NetworkError");
  expect(fetch).toHaveBeenCalledWith(endpoint);
});
