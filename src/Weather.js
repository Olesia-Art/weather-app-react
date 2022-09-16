import React from "react";
import Cities from "./Cities";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <Cities />
      <br />
      <form className="search-form" id="searchCity">
        <div className="row">
          <span className="col-6">
            <input
              type="search"
              placeholder="Enter a city"
              id="search-text-input"
              autocomplete="off"
              autoFocus="on"
              className="form-control shadow-sm"
            />
          </span>
          <span className="col-2">
            <input
              type="submit"
              value="Search"
              className="search btn btn-primary "
            />
          </span>
          <span className="col-2">
            <input
              type="submit"
              value="Current position"
              className="btn btn-success"
              id="currentButton"
            />
          </span>
        </div>
      </form>
      <h1 id="city">Kyiv</h1>
      <ul>
        <li>Monday 12:30</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            id="image"
            className="float-left"
          />
          <span className="temperature">19</span>
          <span className="temperature-units">
            <button id="celsius" className="active">
              °C
            </button>{" "}
            |<button id="fahrenheit">°F</button>
          </span>
        </div>
        <div className="col-6">
          <ul className="applications">
            <li>
              Humidity: <span id="humidity">66</span>%
            </li>
            <li>
              {" "}
              Wind: <span id="wind">8</span> km/h
            </li>
            <li>Precipitation: 13%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
