const STATUS = Object.freeze({
  BADDATA: "The remote data could not be read.",
  CLIPBOARDNOTAVAILABLE: "The clipboard is not availble.",
  ERRORRETRIEVING: "Error retrieving instances.",
  INSTANCESAVAILABLE: "instances are available.",
  LINKCOPIED: "link copied!",
  RETRIEVINGINSTANCES: "retrieving instances ...",
});

const NAVTYPE = Object.freeze({
  LIST: "list",
  RANDOM: "random",
});

export { NAVTYPE, STATUS };
