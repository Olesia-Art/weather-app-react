import React, { useState } from "react";
import WeatherImage from "./WeatherImage";
import "./WeatherForecast.css";
import axios from "axios";
import { useState } from "react";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponce(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-2">
            <div className="WeatherForecast-day"> Thu </div>
            <WeatherImage code="01d" size={30} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">8°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    let apiKey = "cfe05abaf5b67a4bfcbf2eff8aa44335";
    let lon = props.coord.lon;
    let lat = props.coord.lat;

    axios.get(apiUrl).then(handleResponce);

    return null;
  }
}
