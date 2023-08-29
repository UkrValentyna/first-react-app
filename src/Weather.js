import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      date: "Monday 15:00",
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
    setLoaded(true);
  }

  const apiKey = "5b9aaac066641215de6d72f73af7e9b5";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  if (loaded) {
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
            Results for <strong>{weatherData.city}</strong>{" "}
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
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      className="float-left"
                    />
                    <span className="float-left">
                      <h1>{weatherData.temperature}</h1>
                      <span className="units">°C |°F</span>
                    </span>
                  </span>
                </div>
                <div className="col">
                  <ul className="info-center">
                    <li>Precipitation: 2% </li>
                    <li>Humidity: {weatherData.humidity} % </li>
                    <li>Wind: {weatherData.wind} mph</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <ul className="info-right">
                <li>
                  <h5>Weather</h5>
                </li>
                <li>{weatherData.date}</li>
                <li>{weatherData.description}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5b9aaac066641215de6d72f73af7e9b5";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
