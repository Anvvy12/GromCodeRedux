import React, { useEffect } from "react";
import { getWeatherData } from "./weather.actions";
import { connect } from "react-redux";
import { getWeatherSelector } from "./weather.selector";

const Weather = ({ weatherCityes, getCityes }) => {
  useEffect(() => {
    return getCityes();
  }, []);
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherCityes.map((sity) => (
          <li className="city" key={sity.id}>
            <span className="city__name">{sity.name}</span>
            <span className="city__temperature">{sity.temperature} F</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = (state) => {
  return {
    weatherCityes: getWeatherSelector(state),
  };
};

const mapDispatch = {
  getCityes: getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
