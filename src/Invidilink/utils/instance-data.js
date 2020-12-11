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

export { processInstancesData };
