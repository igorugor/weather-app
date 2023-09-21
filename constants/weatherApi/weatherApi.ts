import {weatherAxiosInstance, yandexAxiosInstance} from '../axios';

export const fetchWeatherOrg = (params: IWeatherDataParams) =>
  yandexAxiosInstance.get(
    `/forecast?lat=${params.lat}&lon=${params.lon}&extra=true`,
  );

export const searchCities = (query: string) =>
  weatherAxiosInstance.get(
    `https://geocoding-api.open-meteo.com/v1/search?name=${query}`,
  );
