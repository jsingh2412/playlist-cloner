import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//BASE COLORS:
//GREY:#5D6D7E
//LIGHT LIGHT PURPLE:#F5EEF8
//BRIGHT THIS THIS THIS COLOR:#E6E6FA

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//add console.log() for it to do something!
reportWebVitals();
