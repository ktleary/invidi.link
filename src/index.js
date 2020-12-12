import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App data-testid="app" />
  </React.StrictMode>,
  document.getElementById("root")
);

