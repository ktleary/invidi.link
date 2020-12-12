import { STATUS } from "../constants";

const statusMessage = (props) => {
  const { type, quantity } = props;
  let message;
  switch (type) {
    case STATUS.RETRIEVINGINSTANCES:
      message = STATUS.RETRIEVINGINSTANCES;
      break;
    case STATUS.INSTANCESAVAILABLE:
      message = `${quantity} ${STATUS.INSTANCESAVAILABLE}`;
      break;
    case STATUS.ERRORRETRIEVING:
      message = STATUS.ERRORRETRIEVING;
      break;
    default:
      message = "";
  }
  return message;
};

export { statusMessage };
