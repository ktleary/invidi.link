import instanceData from "../../../data/instance-data"; // updated data with the new response structure
import {
  parseInstancesResult,
  processInstancesData,
} from "../../utils/instance-data";

test("parseInstancesResult returns successful message", () => {
  const [message, instances] = parseInstancesResult(instanceData);
  expect(message).toBe("25 instances are available.");
  expect(instances.length).toBe(25);
});

test("parseInstancesResult returns bad data message", () => {
  const [message, instances] = parseInstancesResult({ error: "TypeError" });
  expect(message).toBe("The remote data could not be read.");
  expect(instances.length).toBe(0);
});

test("processInstancesData returns the successful available instances", () => {
  const availableInstances = processInstancesData(instanceData);
  const successfulInstance = "https://invidious.fdn.fr";

  expect(availableInstances).toContain(successfulInstance);
});

test("processInstancesData does not return instances not marked as success", () => {
  const availableInstances = processInstancesData(instanceData);
  const unsuccessfulInstance = "https://vid.mint.lgbt/";
  expect(availableInstances).not.toContain(unsuccessfulInstance);
});

test("processInstancesData returns an empty array when invalid instance data is returned from the api", () => {
  const availableInstances = processInstancesData(["error", "1234"]);

  expect(availableInstances).toEqual(expect.arrayContaining([]));
});

test("processInstancesData returns undefined when when a garbage string is returned from the api", () => {
  const availableInstances = processInstancesData("88kdkd ^^^^ _ & 7");

  expect(availableInstances.error).toEqual(undefined);
});

test("processInstancesData returns undefined when when a promise is returned from the api", () => {
  const availableInstances = processInstancesData("");

  expect(availableInstances.error).toEqual(undefined);
});

test("processInstancesData returns undefined when an undefined element is returned from the api", () => {
  const availableInstances = processInstancesData(["", {}]);

  expect(availableInstances.error).toEqual(undefined);
});

test("processInstancesData returns undefined when nothing is passed from the api", () => {
  const availableInstances = processInstancesData();

  expect(availableInstances.error).toEqual(undefined);
});
