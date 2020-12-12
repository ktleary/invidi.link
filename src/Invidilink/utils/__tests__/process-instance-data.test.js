import { processInstancesData } from "../../utils/http";
import instanceData from "../../../data/instance-data-sample";

test("processInstancesData returns the successful available instances", () => {
  const availableInstances = processInstancesData(instanceData);
  const successfulInstance = "https://invidious.snopyta.org/";
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

test("processInstancesData returns a TypeError when when a garbage string is returned from the api", () => {
  const availableInstances = processInstancesData("88kdkd ^^^^ _ & 7");

  expect(availableInstances.error).toEqual("TypeError");
});

test("processInstancesData returns a TypeError when an undefined element is returned from the api", () => {
  const availableInstances = processInstancesData(["", {}]);

  expect(availableInstances.error).toEqual("TypeError");
});

test("processInstancesData returns an errors when nothing is passed from the api", () => {
  const availableInstances = processInstancesData();

  expect(availableInstances.error).toEqual("TypeError");
});
