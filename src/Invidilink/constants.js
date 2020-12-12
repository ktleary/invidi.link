const STATUS = Object.freeze({
  BADDATA: "The remote data could not be read.",
  CLIPBOARDNOTAVAILABLE: "The clipboard is not availble.",
  ERRORRETRIEVING: "Error retrieving instances.",
  INSTANCESAVAILABLE: "instances are available.",
  LINKCOPIED: "link copied!",
  RETRIEVINGINSTANCES: "retrieving instances ...",
});

// const endpoint = "https://instances.invidio.us/instances.json";
const endpoint = "http://localhost:5000/instance-data.json";

export { endpoint, STATUS };
