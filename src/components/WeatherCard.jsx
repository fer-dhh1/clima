import React, { useState } from "react";
import "./styles/weatherCard.css";

const WeatherCard = ({ weather, temp }) => {
const [isCel, setisCel] = useState(true);
const handleTemp = () => {
    setisCel(!isCel);
  };

  return (
    <div className="weather__card">
      <h1 className="weather__title">Weather App</h1>
      <h2 className="weather__place">
        {weather?.name}, {weather?.sys.country}
      </h2>
      <div className="weather__container">
        <figure className="weather__image">
          <img
            src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
            alt="sun image"
          />
        </figure>
        <div className="weather__info">
          <h3 className="weather__description">
            {`"${weather?.weather[0].description}"`}
          </h3>
          <ul className="weather__list">
            <li className="weather__item">
              <span>Wind Speed: </span>
              {weather?.wind.speed} m/s
            </li>
            <li className="weather__item">
              <span>Clouds: </span>
              {weather?.clouds.all} %
            </li>
            <li className="weather__item">
              <span>Pressure: </span>
              {weather?.main.pressure} hPa
            </li>
          </ul>
        </div>
      </div>
      <h3>{isCel ? temp?.cel + "°C" : temp?.fah + "°F"}</h3>
      <button onClick={handleTemp}>Change to {isCel ? "°F" : "°C"}</button>
    </div>
  );
};

export default WeatherCard;
