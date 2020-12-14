let endpoint;

const hostname = window && window.location && window.location.hostname;

if (hostname === "invidi.link") {
  endpoint = "https://instances.invidio.us/instances.json";
} else if (hostname === "localhost") {
  endpoint = "http://localhost:5000/instance-data.json";
}

export const ENDPOINT = endpoint;
