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
          <a href="https://www.linkedin.com/in/olesia-artibiakina-00030ab9/">
            Olesia Artibiakina
          </a>{" "}
          and is{" "}
          <a href="https://github.com/Olesia-Art/weather-app-react">
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://resilient-toffee-2125b3.netlify.app">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
