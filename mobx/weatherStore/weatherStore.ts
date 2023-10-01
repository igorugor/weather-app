import {makeAutoObservable, runInAction} from 'mobx';
import {fetchWeatherOrg} from '../../constants/weatherApi/weatherApi';

class WeatherStore {
  weatherState: IWeatherObj | null = null;
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

      const {data} = await fetchWeatherOrg(params);

      runInAction(() => {
        this.weatherState = data;
      });

      this.setPending(false);
    } catch (e: any) {
      this.setError(JSON.stringify(e));
    }
  };
}

export const weatherStore = new WeatherStore();
