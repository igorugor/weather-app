import {makeAutoObservable, runInAction} from 'mobx';
import {
  fetchOpenWeather,
  fetchWeatherOrg,
} from '../../constants/weatherApi/weatherApi';
import {AxiosResponse} from 'axios';

class WeatherStore {
  weatherState: IWeatherObj | null = null;
  openWeatherState: IOpenWeatherForecastObj | null = null;
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
    }
  };
}

export const weatherStore = new WeatherStore();
