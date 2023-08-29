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
              placeholder="Enter a city.."
              autoFocus="on"
              className="form-control "
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="h-100 w-100" />
          </div>
        </div>
      </form>
      <div className="Weather-data">
        <h2>
          Results for <strong>London</strong>{" "}
          <span className="current-location">
            <a href="/" title="Current location">
              📌
            </a>
          </span>
        </h2>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <span className="clearfix">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="Clear sky"
                    className="float-left"
                  />
                  <span className="float-left">
                    <h1>17</h1>
                    <span className="units">°C |°F</span>
                  </span>
                </span>
              </div>
              <div className="col">
                <ul className="info-center">
                  <li>Precipitation: 2% </li>
                  <li>Humidity: 59% </li>
                  <li>Wind: 16 mph</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <ul className="info-right">
              <li>
                <h5>Weather</h5>
              </li>
              <li>Tuesday 12:00</li>
              <li> Mostly cloudy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
