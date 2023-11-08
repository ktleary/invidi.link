import { ENDPOINT } from "../api-config";
import { getRandomListItem } from "./random";

function getQueryString(queryParam = "url") {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const url = params.get(queryParam);
  return url;
}

async function getAvailableInstances() {
  try {
    const response = await fetch(ENDPOINT);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (err) {
    return { error: err.name };
  }
}

function replaceUri(original, replacement) {
  const newUrl = new URL(original);
  const replacementUrl = new URL(replacement);
  newUrl.host = replacementUrl.host;
  return newUrl.href;
}

const validateUrl = (string) => {
  try {
    new URL(string);
  } catch (_) {
    return false;
  }
  return true;
};

const getRandomUrl = (availableInstances, url) => {
  const selectedInstanceLink = getRandomListItem(availableInstances);
  const randomInstanceLink = replaceUri(url, selectedInstanceLink);
  return randomInstanceLink;
};

export {
  getAvailableInstances,
  getRandomUrl,
  getQueryString,
  replaceUri,
  validateUrl,
};
