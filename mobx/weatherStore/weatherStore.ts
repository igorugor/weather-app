import {AxiosResponse} from 'axios';

import {makeAutoObservable, runInAction} from 'mobx';

import _ from 'lodash';

import {
  fetchOpenMeteo,
  fetchOpenWeather,
  fetchWeatherOrg,
} from '../../constants/weatherApi/weatherApi';

class WeatherStore {
  weatherState: IWeatherObj | null = null;
  openWeatherState: IOpenWeatherForecastObj | null = null;
  openMeteoState: any | null = null;
  pending = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setError = (value: string | null) => {
    this.error = value;
  };

  setPending = (value: boolean) => {
    this.pending = value;
  };

  getWeatherData = async (params: IWeatherDataParams) => {
    try {
      this.setPending(true);

      const {data}: AxiosResponse<IWeatherObj> = await fetchWeatherOrg(params);

      const resultForecast = {
        geo_object: data.geo_object,
        fact: data.fact,
        forecasts: data.forecasts.map(fc => ({
          date: fc.date,
          dayIcon: fc.parts.day.icon,
          nightIcon: fc.parts.night.icon,
          dayTemp: fc.parts.day.temp_max,
          nightTemp: fc.parts.night.temp_max,
        })),
      };

      runInAction(() => {
        this.weatherState = resultForecast;
      });

      this.setPending(false);
    } catch (e: any) {
      this.setError(JSON.stringify(e));
      this.setPending(false);
    }
  };

  getOpenWeatherData = async (params: IWeatherDataParams) => {
    try {
      this.setPending(true);

      const {data}: AxiosResponse<IOpenWeatherForecastObj> =
        await fetchOpenWeather(params);

      const resultForecast = {
        current: data.current,
        daily: data.daily.map(fc => ({
          date: fc.dt * 1000,
          dayIcon: fc.weather[0].icon,
          nightIcon: fc.weather[0].icon,
          dayTemp: fc.temp.max,
          nightTemp: fc.temp.min,
        })),
      };

      runInAction(() => {
        this.openWeatherState = resultForecast;
      });

      this.setPending(false);
    } catch (e: any) {
      this.setError(JSON.stringify(e));
      this.setPending(false);
    }
  };

  getOpenMeteoData = async (params: IWeatherDataParams) => {
    try {
      this.setPending(true);

      const {data}: AxiosResponse<IOpenMeteoObj> = await fetchOpenMeteo(params);

      let parsedForecast = {
        current: data.current,
        daily: _.zipWith(
          data.daily.time,
          data.daily.temperature_2m_max,
          data.daily.temperature_2m_min,
          function (time: number, tempMax: number, tempMin: number) {
            return {
              time,
              tempMax,
              tempMin,
            };
          },
        ),
      };

      const resultForecast = {
        current: parsedForecast.current,
        daily: parsedForecast.daily.map(fc => ({
          date: fc.time * 1000,
          dayIcon: '',
          nightIcon: '',
          dayTemp: fc.tempMax,
          nightTemp: fc.tempMin,
        })),
      };

      runInAction(() => {
        this.openMeteoState = resultForecast;
      });

      this.setPending(false);
    } catch (e: any) {
      this.setPending(false);
      this.setError(JSON.stringify(e));
    }
  };
}

export const weatherStore = new WeatherStore();
