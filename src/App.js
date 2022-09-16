import React from "react";

import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          <a href="https://github.com/Olesia-Art/weather-app">
            Open-source code{" "}
          </a>
          by Olesia Artibiakina
        </footer>
      </div>
    </div>
  );
}

export default App;
