import { statusMessage } from "./message";
import { STATUS } from "../constants";
import { nth } from "lodash";

const getVersionStatusClassUri = (instanceData) => {
  const vitals = nth(instanceData, 1);
  const { stats, monitor, uri } = vitals || {};
  const { statusClass } = monitor || {};
  const { version } = stats || {};
  return { version, statusClass, uri };
};

const getSuccessUris = (acc, instanceData) => {
  const { version, statusClass, uri } = getVersionStatusClassUri(instanceData);
  return version && statusClass === "success" ? [...acc, uri] : acc;
};

const processInstancesData = (instancesData = []) =>
  Array.isArray(instancesData) ? instancesData.reduce(getSuccessUris, []) : [];

function parseInstancesResult(result) {
  if (result.error) {
    return [statusMessage({ type: STATUS.BADDATA }), []];
  }
  const instances = processInstancesData(result);
  let message = statusMessage({
    type: STATUS.INSTANCESAVAILABLE,
    quantity: instances?.length || 0,
  });

  return [message, instances];
}

export { parseInstancesResult, processInstancesData };
