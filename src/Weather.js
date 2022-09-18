import React, { useState } from "react";
import Cities from "./Cities";
import axios from "axios";
import "./Weather.css";
import FormatteDate from "./FormatteDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: response.data.main.humidity,
      imageUrl: `http://openweathermap.org/img/wn/10d@2x.png`,
    });
  }

  if (weatherData.ready) {
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
        <h1 id="city">{weatherData.city}</h1>
        <ul>
          <li>
            <FormatteDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.imageUrl}
              alt={weatherData.description}
              id="image"
              className="float-left"
            />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="temperature-units">
              <button id="celsius" className="active">
                °C
              </button>{" "}
              |<button id="fahrenheit">°F</button>
            </span>
          </div>
          <div className="col-6">
            <ul className="applications">
              <li>Humidity: {weatherData.humidity}%</li>
              <li> Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "cfe05abaf5b67a4bfcbf2eff8aa44335";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
