import { statusMessage } from './message';
import { STATUS } from '../constants';

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
    return { error: name };
  }
}

function parseInstancesResult(result) {
  const instances = !result.error ? processInstancesData(result) : [];
  let message = !result.error
    ? statusMessage({
        type: STATUS.INSTANCESAVAILABLE,
        quantity: instances.length,
      })
    : statusMessage({ type: STATUS.BADDATA });
  return [message, instances];
}

export { parseInstancesResult, processInstancesData };
