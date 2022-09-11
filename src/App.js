import React from "react";

import "./App.css";
import Cities from "./Cities";
import Details from "./Details";
import Weather from "./Weather";

function App() {
  return (
    <div className="container">
      <div className="Weather">
        <div className="card">
          <div className="card-body">
            <Cities />
            <Weather />
            <h1 id="cityName">Kyiv</h1>
            <h2>
              <span id="date">Monday</span>
            </h2>
            <h3 id="description">Clear</h3>
            <Details />
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
      <a href="https://github.com/Olesia-Art/weather-app">Open-source code </a>
      by Olesia Artibiakina
    </div>
  );
}

export default App;
