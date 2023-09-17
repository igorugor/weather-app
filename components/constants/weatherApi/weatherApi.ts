import { weatherAxiosInstance, yandexAxiosInstance } from "../axios";

export const fetchWeatherOrg = () =>
  yandexAxiosInstance.get("https://api.weather.yandex.ru/v2/forecast?lat=55.75396&lon=37.620393&extra=true");
