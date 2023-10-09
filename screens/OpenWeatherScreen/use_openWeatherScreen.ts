import {StatusBar} from 'react-native';
import {weatherStore} from '../../mobx/weatherStore/weatherStore';
import {getData} from '../../constants/asyncStorage';
import React, {useEffect} from 'react';

export const useOpenWeatherScreen = () => {
  StatusBar.setBarStyle('light-content');

  const {pending, getOpenWeatherData, openWeatherState} = weatherStore;

  const retreiveData = async () => {
    const coords = await getData('coordinates');

    if (coords) {
      getOpenWeatherData({
        lat: coords.lat,
        lon: coords.lon,
      });
    } else {
      getOpenWeatherData({
        lat: 55,
        lon: 50,
      });
    }
  };

  useEffect(() => {
    retreiveData();
  }, []);

  const onRefresh = React.useCallback(() => {
    retreiveData();
  }, []);

  return {
    onRefresh,
    pending,
    openWeatherState,
  };
};
