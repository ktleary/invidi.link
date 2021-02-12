let endpoint;

const hostname = window && window.location && window.location.hostname;

if (hostname === "invidi.link" || hostname === "www.invidi.link") {
  endpoint = "https://api.invidious.io/instances.json";
} else if (hostname === "localhost") {
  endpoint = "http://localhost:5000/instance-data.json";
}

export const ENDPOINT = endpoint;
