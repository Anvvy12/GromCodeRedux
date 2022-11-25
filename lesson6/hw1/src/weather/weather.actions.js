import fetchweatherData from "./weather.gateway";

export const WEATHER_DATA = "WEATHER/WEATHER_DATA";

const weatherAction = (weatherData) => {
  return {
    type: WEATHER_DATA,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    return fetchweatherData().then((weatherData) => {
      dispatch(weatherAction(weatherData));
    });
  };
};
