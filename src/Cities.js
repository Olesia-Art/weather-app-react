import React from "react";
import "./Weather.css";

export default function Cities() {
  return (
    <ul className="cities">
      <li className="city">
        <button>Kyiv</button>
      </li>
      <li className="city">
        <button>Paris</button>
      </li>
      <li className="city">
        <button>Krakow</button>
      </li>
      <li className="city">
        <button>Berlin</button>
      </li>
    </ul>
  );
}
