import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {useStyles} from './styles';
import {GeneralWeatherData} from '../../components/GeneralWeatherData/GeneralWeatherData';

export const MainScreen = () => {
  const styles = useStyles();
  return (
    <KeyboardAvoidingView style={styles.container}>
      <SearchBar />
      <GeneralWeatherData />
    </KeyboardAvoidingView>
  );
};
