const validateUrl = (string) => {
  try {
    new URL(string);
  } catch (_) {
    return false;
  }
  return true;
};

function getQueryString(queryParam = "url") {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const url = params.get(queryParam);
  return url;
}

function processInstancesData(instancesData) {
  return (
    instancesData &&
    instancesData
      .filter(
        (instanceData) =>
          instanceData[1].stats &&
          instanceData[1].stats.version &&
          instanceData[1].monitor &&
          instanceData[1].monitor.statusClass === "success"
      )
      .map((successInstance) => successInstance[1].uri)
  );
}

export { getQueryString, processInstancesData, validateUrl };
