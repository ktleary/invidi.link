import { ENDPOINT } from "../api-config";

function getQueryString(queryParam = "url") {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const url = params.get(queryParam);
  return url;
}

async function getAvailableInstances() {
  return await fetch(ENDPOINT)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch((err) => {
      const { name } = err;
      return { error: name };
    });
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

export {
  getAvailableInstances,
  getQueryString,
  replaceUri,
  validateUrl,
};
