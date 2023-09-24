import React, {useEffect} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {useStyles} from './styles';
import {GeneralWeatherData} from '../../components/GeneralWeatherData/GeneralWeatherData';
import {Forecasts} from '../../components/Forecasts/Forecasts';
import {weatherStore} from '../../mobx/weatherStore/weatherStore';
import {ProggressBar} from '../../components/ProggressBar/ProggressBar';

export const MainScreen = () => {
  const styles = useStyles();

  const {pending, getWeatherData} = weatherStore;

  useEffect(() => {
    getWeatherData({
      lat: 55,
      lon: 50,
    });
  }, []);

  if (pending) {
    return <ProggressBar />;
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <SearchBar />
      <GeneralWeatherData />
      <Forecasts />
    </KeyboardAvoidingView>
  );
};
