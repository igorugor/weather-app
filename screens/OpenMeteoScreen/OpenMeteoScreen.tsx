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
import {useOpenMeteoScreen} from './use_openMeteoScreen';

export const OpenMeteoScreen = observer(() => {
  const styles = useStyles();

  const {onRefresh, openMeteoState, pending} = useOpenMeteoScreen();

  if (!openMeteoState) {
    return null;
  }

  const {current, daily} = openMeteoState;

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
                condition={'placeholder'}
                humidity={current.relativehumidity_2m}
                temp={current.temperature_2m}
                weatherIcon={`01d`}
                windSpeed={current.windspeed_10m}
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
