import React from "react";
import FormatteDate from "./FormatteDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1 id="city">{props.data.city}</h1>
      <ul>
        <li>
          <FormatteDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src={props.data.imageUrl}
            alt={props.data.description}
            id="image"
            className="float-left"
          />
          <span className="temperature">{props.data.temperature}</span>
          <span className="temperature-units">
            <button id="celsius" className="active">
              °C
            </button>{" "}
            |<button id="fahrenheit">°F</button>
          </span>
        </div>
        <div className="col-6">
          <ul className="applications">
            <li>Humidity: {props.data.humidity}%</li>
            <li> Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
