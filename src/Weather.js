import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className=" btn btn-primary " />
          </div>
        </div>
      </form>
      <h1>Oslo</h1>
      <ul>
        <li>Wednesday 07:00 </li>
        <li>Mostly cloudy </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Mostly cloudy"
            />

            <span className="temperature">16</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 15% </li>
            <li> Humidity: 72%</li>
            <li> Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
