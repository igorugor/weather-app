import React from 'react';
import {Text, View} from 'react-native';

import {Circle} from 'react-native-progress';

import {useGeneralWeatherData} from './use_GeneralWeatherData';
import {useStyle} from './styles';
import {observer} from 'mobx-react';

export const GeneralWeatherData = observer(() => {
  const styles = useStyle();

  const {pending, weatherState} = useGeneralWeatherData();

  if (!weatherState) {
    return null;
  }

  const {fact, forecasts, geo_object} = weatherState;

  console.log(fact);

  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>
        {pending ? <Circle animated={true} /> : fact.temp}
      </Text>
    </View>
  );
});
