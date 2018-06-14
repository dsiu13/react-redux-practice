import axios from 'axios';
const API_KEY = 'key';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

// Redux-Promise Middleware
// If the payload has a promise, redux-promise stops the action.
// After the promise resolves, it creates a new action and sends it to reducers
// Otherwise it goes straight to the reducers
