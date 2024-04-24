const hostname = window && window.location && window.location.hostname;

export const ENDPOINT =
  hostname === "invidi.link" || hostname === "www.invidi.link"
    ? "https://api.invidious.io/instances.json"
    : "http://localhost:5555/instance-data.json";
