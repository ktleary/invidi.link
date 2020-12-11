const STATUS = Object.freeze({
  ERRORRETRIEVING: "Error retrieving instances.",
  INSTANCESAVAILABLE: "instances are available.",
  LINKCOPIED: "link copied!",
  RETRIEVINGINSTANCES: "retrieving instances ...",
});

const endpoint = "https://instances.invidio.us/instances.json";

export { endpoint, STATUS };
