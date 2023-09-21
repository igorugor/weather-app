import {weatherStore} from '../../mobx/weatherStore/weatherStore';

export const useGeneralWeatherData = () => {
  const {weatherState, pending} = weatherStore;

  return {
    weatherState,
    pending,
  };
};
