import React, {useEffect} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import {observer} from 'mobx-react';

import {useStyles} from './styles';

import {SearchBar} from '../../components/SearchBar/SearchBar';
import {GeneralWeatherData} from '../../components/GeneralWeatherData/GeneralWeatherData';
import {Forecasts} from '../../components/Forecasts/Forecasts';
import {weatherStore} from '../../mobx/weatherStore/weatherStore';
import {ProggressBar} from '../../components/ProggressBar/ProggressBar';
import {getData} from '../../constants/asyncStorage';

export const MainScreen = observer(() => {
  const retreiveData = async () => {
    const coords = await getData('coordinates');

    if (coords) {
      getWeatherData({
        lat: coords.lat,
        lon: coords.lon,
      });
    } else {
      getWeatherData({
        lat: 55,
        lon: 50,
      });
    }
  };

  const styles = useStyles();

  StatusBar.setBarStyle('light-content');

  const {pending, getWeatherData} = weatherStore;

  useEffect(() => {
    retreiveData();
  }, []);

  return (
    <>
      <Image
        style={styles.background}
        source={require('../../assets/backgrounds/photo-1536510657370-18a343d1bf8d.jpeg')}
        resizeMode="cover"
        blurRadius={50}
      />
      {pending ? (
        <ProggressBar />
      ) : (
        <SafeAreaView style={styles.appcontainer}>
          <KeyboardAvoidingView style={styles.container}>
            <SearchBar />
            <GeneralWeatherData />
            <Forecasts />
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
    </>
  );
});
