import React from "react";
import "./Weather.css";

export default function App() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city.."
          className="form-control"
          autoFocus="on"
        />
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="https:/ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
