import { getQueryString, replaceUri, validateUrl } from "../../utils/http";

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
