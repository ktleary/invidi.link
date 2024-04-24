const hostname = window && window.location && window.location.hostname;

export const ENDPOINT =
  hostname === "invidi.link" || hostname === "www.invidi.link"
    ? "https://api.invidious.io/instances.json"
    : "https://api.invidious.io/instances.json";
//"http://localhost:5000/instance-data.json";
