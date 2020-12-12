function getQueryString(queryParam = "url") {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const url = params.get(queryParam);
  return url;
}

function processInstancesData(instancesData) {
  try {
    return instancesData
      .filter(
        (instanceData) =>
          instanceData[1].stats &&
          instanceData[1].stats.version &&
          instanceData[1].monitor &&
          instanceData[1].monitor.statusClass === "success"
      )
      .map((successInstance) => successInstance[1].uri);
  } catch (e) {
    const { name } = e;
    if (name === "TypeError") {
      return { error: name };
      /* add TypeError (bad data) handling  */
    } else {
      return { error: name };
    }
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

export { getQueryString, processInstancesData, replaceUri, validateUrl };
