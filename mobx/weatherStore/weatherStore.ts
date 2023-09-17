import {makeAutoObservable, runInAction} from 'mobx';
import {fetchWeatherOrg} from '../../constants/weatherApi/weatherApi';

class WeatherStore {
  weatherState = {};
  pending = false;

  constructor() {
    makeAutoObservable(this);
  }

  getWeatherData = async () => {
    runInAction(() => {
      this.pending = true;
    });

    const {data} = await fetchWeatherOrg();

    runInAction(() => {
      this.weatherState = data;
      this.pending = false;
    });
  };
}

export const weatherStore = new WeatherStore();
