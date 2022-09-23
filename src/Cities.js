import React from "react";
import "./Weather.css";

export default function Cities() {
  return (
    <ul className="cities">
      <li className="city">
        <a href="/">Kyiv</a>
      </li>
      <li className="city">
        <a href="/">Paris</a>
      </li>
      <li className="city">
        <a href="/">Krakow</a>
      </li>
      <li className="city">
        <a href="/">Berlin</a>
      </li>
    </ul>
  );
}
