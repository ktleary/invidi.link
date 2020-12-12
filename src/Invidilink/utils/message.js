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
    case STATUS.LINKCOPIED:
      message = STATUS.LINKCOPIED;
      break;
    case STATUS.CLIPBOARDNOTAVAILABLE:
      message = STATUS.CLIPBOARDNOTAVAILABLE;
      break;
    case STATUS.BADDATA:
      message = STATUS.BADDATA;
      break;
    default:
      message = "";
  }
  return message;
};

export { statusMessage };
