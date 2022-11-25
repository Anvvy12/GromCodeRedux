import { WEATHER_DATA } from "./weather.actions";

const initialState = { weatherData: [] };

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_DATA:
      return {
        ...state,
        weatherData: action.payload.weatherData,
      };
    default:
      return state;
  }
};

export default weatherReducer;
