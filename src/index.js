import React from "react";
import ReactDOM from "react-dom/client"; // React 18 mein ye import use karein
import App from "./App";
import "./index.css";

// React 18 ka naya method
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);