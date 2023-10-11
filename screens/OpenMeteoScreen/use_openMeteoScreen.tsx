import {StatusBar} from 'react-native';
import {weatherStore} from '../../mobx/weatherStore/weatherStore';
import React, {useEffect} from 'react';
import {retreiveData} from '../../constants/utilities';

export const useOpenMeteoScreen = () => {
  StatusBar.setBarStyle('light-content');

  const {pending, openMeteoState} = weatherStore;

  useEffect(() => {
    retreiveData();
  }, []);

  const onRefresh = React.useCallback(() => {
    retreiveData();
  }, []);

  return {
    onRefresh,
    pending,
    openMeteoState,
  };
};
