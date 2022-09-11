import React from "react";
import "./App.css";

export default function App() {
  return (
    <form className="search-form" id="searchCity">
      <div className="row">
        <span className="col-6">
          <input
            type="text"
            placeholder="Enter a city"
            id="search-text-input"
            autocomplete="off"
            autofocus="on"
            className="form-control shadow-sm"
          />
        </span>
        <span className="col-2">
          <input
            type="submit"
            value="Search"
            className="search btn btn-primary"
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
  );
}
