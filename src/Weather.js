import React from "react";

export default function Weather() {
  return (
    <div classname="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-6">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
      <div className="Weather-data">
        <h3> Results for London</h3>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <img
                  srs="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Clear sky"
                />{" "}
                <h1>17°C</h1>
              </div>
              <div className="col">
                <ul>
                  <li>Precipitation: 2% </li>
                  <li>Humidity: 59% </li>
                  <li>Wind: 16 mph</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <ul>
              <li>
                <h3>Weather</h3>
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
