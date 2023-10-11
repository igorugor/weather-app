import {getData} from './asyncStorage';
import {weatherStore} from '../mobx/weatherStore/weatherStore';

const {getOpenMeteoData, getWeatherData, getOpenWeatherData} = weatherStore;

export const retreiveData = async () => {
  const coords = await getData('coordinates');

  if (coords) {
    getWeatherData({
      lat: coords.lat,
      lon: coords.lon,
    });
    getOpenMeteoData({
      lat: coords.lat,
      lon: coords.lon,
    });
    getOpenWeatherData({
      lat: coords.lat,
      lon: coords.lon,
    });
  } else {
    getWeatherData({
      lat: 55,
      lon: 50,
    });
    getOpenMeteoData({
      lat: 55,
      lon: 50,
    });
    getOpenWeatherData({
      lat: 55,
      lon: 50,
    });
  }
};
