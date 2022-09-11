import React from "react";
import "./App.css";

export default function Details() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="weather">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            id="image"
            className="float-left"
          />
          <span className="temperature">19</span>
          <span className="temperature-units">
            <a href="#" id="celsius" className="active">
              °C
            </a>{" "}
            |
            <a href="#" id="fahrenheit">
              °F
            </a>
          </span>
        </div>
      </div>
      <div className="col-6 applications">
        <p className="applications">
          Humidity: <span id="humidity">66</span>%
          <br />
          Wind: <span id="wind">8</span> km/h
        </p>
      </div>
    </div>
  );
}
