import React, { useState } from "react";
import Cities from "./Cities";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: response.data.main.humidity,
      image: response.data.weather[0].icon,
      coord: response.data.coord,
    });
  }

  function search() {
    const apiKey = "cfe05abaf5b67a4bfcbf2eff8aa44335";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Cities />
        <br />

        <form className="search-form" id="searchCity" onSubmit={handleSubmit}>
          <div className="row">
            <span className="col-6">
              <input
                type="search"
                placeholder="Enter a city"
                id="search-text-input"
                autocomplete="off"
                autoFocus="on"
                className="form-control shadow-sm"
                onChange={cityChange}
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

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
