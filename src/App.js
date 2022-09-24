import React from "react";

import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/olesia-artibiakina-00030ab9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Olesia Artibiakina
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Olesia-Art/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://resilient-toffee-2125b3.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
