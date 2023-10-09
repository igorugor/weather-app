import React from 'react';
import {
  KeyboardAvoidingView,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {observer} from 'mobx-react';

import {useStyles} from './styles';

import {GeneralWeatherData} from '../../components/GeneralWeatherData/GeneralWeatherData';
import {Forecasts} from '../../components/Forecasts/Forecasts';
import {ProggressBar} from '../../components/ProggressBar/ProggressBar';
import {useOpenWeatherScreen} from './use_openWeatherScreen';

export const OpenWeatherScreen = observer(() => {
  const styles = useStyles();

  const {onRefresh, openWeatherState, pending} = useOpenWeatherScreen();

  if (!openWeatherState) {
    return null;
  }

  const {current, daily} = openWeatherState;

  return (
    <>
      {pending ? (
        <ProggressBar />
      ) : (
        <SafeAreaView style={styles.appcontainer}>
          <KeyboardAvoidingView style={styles.container}>
            <ScrollView
              nestedScrollEnabled={true}
              contentContainerStyle={styles.scrollContainer}
              refreshControl={
                <RefreshControl refreshing={pending} onRefresh={onRefresh} />
              }>
              <GeneralWeatherData
                condition={current.weather[0].description}
                humidity={current.humidity}
                temp={current.temp}
                weatherIcon={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                windSpeed={current.wind_speed}
                tag="OpenWeather"
              />
              <Forecasts forecasts={daily} tag="OpenWeather" />
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
    </>
  );
});
