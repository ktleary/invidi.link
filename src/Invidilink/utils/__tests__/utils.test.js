import {
  getQueryString,
  processInstancesData,
  replaceUri,
  validateUrl,
} from "../../utils/http";
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

  expect(availableInstances.error).toEqual('TypeError');
});

test("processInstancesData returns a TypeError when an undefined element is returned from the api", () => {
  const availableInstances = processInstancesData(["", {}]);

  expect(availableInstances.error).toEqual('TypeError');
});

test("processInstancesData returns an errors when nothing is passed from the api", () => {
  const availableInstances = processInstancesData();

  expect(availableInstances.error).toEqual('TypeError');
});



test("it substitutes the host in the supplied link", () => {
  const url = "https://inviodus.snoptya.org/watch?v=123";
  const availableInstances = [
    "https://domain1.xyz",
    "https://domain2.xyz",
    "https://domain3.xyz",
  ];
  const replacedUrls = availableInstances.map((availableInstance) =>
    replaceUri(url, availableInstance)
  );
  const exampleReplacedUrl = `https://domain2.xyz/watch?v=123`;

  expect(replacedUrls).toContain(exampleReplacedUrl);
});

test("validateUrl rejects an invalid URL", () => {
  const badUrl = "invalidurl";

  expect(false).toEqual(validateUrl(badUrl));
});

test("validateUrl accepts a valid URL", () => {
  const goodUrl = "https://inviodus.snoptya.org/watch?v=123";

  expect(true).toEqual(validateUrl(goodUrl));
});

test("getQueryString finds the value for a url queryString", () => {
  const href = "https://invidi.link/";
  const search = "url=https://inviodus.snoptya.org/watch?v=123";
  delete global.window.location;
  global.window.location = { href, search };
  const urlParam = getQueryString("url");

  expect(urlParam).toEqual("https://inviodus.snoptya.org/watch?v=123");
});

test("getQueryString does not find the value for a malformed queryString", () => {
  const href = "https://invidi.link/";
  const badSearch = "https://inviodus.snoptya.org/watch?v=123";
  delete global.window.location;
  global.window.location = { href, badSearch };
  const urlParam = getQueryString("url");

  expect(urlParam).toEqual(null);
});
