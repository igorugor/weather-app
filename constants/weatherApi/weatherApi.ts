import {weatherAxiosInstance, yandexAxiosInstance} from '../axios';

export const fetchWeatherOrg = (params: IWeatherDataParams) =>
  yandexAxiosInstance.get(
    `/forecast?lat=${params.lat}&lon=${params.lon}&extra=true`,
  );

export const fetchOpenWeather = (params: IWeatherDataParams) =>
  weatherAxiosInstance.get(
    `https://openweathermap.org/data/2.5/onecall?lat=${params.lat}&lon=${params.lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`,
  );

export const fetchOpenMeteo = (params: IWeatherDataParams) =>
  weatherAxiosInstance.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${params.lat}&longitude=${params.lon}&current=temperature_2m,relativehumidity_2m,precipitation,rain,showers,snowfall,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max&timeformat=unixtime&timezone=Europe%2FMoscow&format=json`,
  );

export const searchCities = (query: string) =>
  weatherAxiosInstance.get(
    `https://geocoding-api.open-meteo.com/v1/search?name=${query}`,
  );
