import React from "react";
import FormatteDate from "./FormatteDate";
import WeatherImage from "./WeatherImage";
import WeatherTemperature from "./WeatherTemperature";

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
      <br />
      <div className="row">
        <div className="col-6">
          <WeatherImage code={props.data.image} />
          <WeatherTemperature celsius={props.data.temperature} />
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
