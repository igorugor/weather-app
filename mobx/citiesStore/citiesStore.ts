import {makeAutoObservable} from 'mobx';
import {searchCities} from '../../constants/weatherApi/weatherApi';

class CitiesStore {
  citiesList: ICityListObj[] | undefined = undefined;
  pending: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setIsPending(value: boolean) {
    this.pending = value;
  }

  setCitiesList(value: ICityListObj[] | undefined) {
    this.citiesList = value;
  }

  setError(value: string | null) {
    this.error = value;
  }

  getCitiesList = async (query: string) => {
    try {
      if (query.length === 0) {
        this.setError(null);
        this.setCitiesList(undefined);
        return;
      }

      this.setIsPending(true);

      const {data} = await searchCities(query);

      if (data.results) {
        this.setCitiesList(
          data.results.map((result: ICityListObj) => ({
            country: result.country,
            country_code: result.country_code,
            country_id: result.country_id,
            name: result.name,
            id: result.id,
            longitude: result.longitude,
            latitude: result.latitude,
          })),
        );

        this.setError(null);
      } else {
        this.setError('No cities found');
      }

      this.setIsPending(false);
    } catch (e: any) {
      this.setError(JSON.stringify(e));
    }
  };
}

export const citiesStore = new CitiesStore();
