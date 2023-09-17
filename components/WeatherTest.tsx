import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {weatherStore} from '../mobx/weatherStore/weatherStore';
import {Text} from 'react-native';
import MapBox, {Camera, MapView} from '@rnmapbox/maps';

MapBox.setAccessToken(
  'sk.eyJ1IjoiaW50cmV4ZGV2ZWxvcGVyIiwiYSI6ImNsazg0Mmd2dTA3MDMzcW1naHB3cDdndTIifQ.EyoFXVEMkmArVhsjE_3H9w',
);

export const WeatherTest = observer(() => {
  const {getWeatherData, weatherState, pending} = weatherStore;

  useEffect(() => {
    //getWeatherData();
  }, []);

  useEffect(() => {
    console.log(`${pending ? 'pending...' : 'not pending!'}`);
  }, [pending]);

  console.log('Weather: ', weatherState);

  return pending ? (
    <Text>'LOADING'</Text>
  ) : (
    <MapView
      logoEnabled={false}
      attributionEnabled={false}
      style={{
        flex: 1,
      }}>
      <Camera centerCoordinate={[55, 50]} animationDuration={1} />
    </MapView>
  );
});
