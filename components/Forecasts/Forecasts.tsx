import React from 'react';
import {ScrollView, View} from 'react-native';

import moment from 'moment';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import {TextDefault} from '../TextDefault/TextDefault';
import {weatherStore} from '../../mobx/weatherStore/weatherStore';
import {useStyle} from './styles';
import {SvgUri} from 'react-native-svg';
import {observer} from 'mobx-react';

export const Forecasts = observer(() => {
  const styles = useStyle();

  const {pending, weatherState} = weatherStore;

  if (!weatherState || pending) {
    return null;
  }

  const {forecasts} = weatherState;

  return (
    <View style={styles.forecastContainer}>
      <View style={styles.title}>
        <FontAwesomeIcons name="calendar" color="#fff" size={20} />
        <TextDefault fontSize={20}>Daily forecast</TextDefault>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.forecasts}>
        {forecasts.map(forecast => (
          <View key={forecast.date} style={styles.forecast}>
            <View style={styles.forecastPart}>
              <View style={styles.imageContainer}>
                <SvgUri
                  uri={`https://yastatic.net/weather/i/icons/funky/dark/${forecast.parts.day.icon}.svg`}
                  width="100%"
                  height="100%"
                />
              </View>
              <View style={styles.forecastPartTemp}>
                <TextDefault fontSize={20}>
                  {moment(forecast.date).utc().format('dddd')}
                </TextDefault>
                <View style={styles.tempContainer}>
                  <TextDefault bold fontSize={25}>
                    {forecast.parts.day.temp_max}
                  </TextDefault>
                  <View style={styles.celciusIcon} />
                </View>
              </View>
            </View>

            <View style={styles.forecastPart}>
              <View style={styles.imageContainer}>
                <SvgUri
                  uri={`https://yastatic.net/weather/i/icons/funky/dark/${forecast.parts.night.icon}.svg`}
                  width="100%"
                  height="100%"
                />
              </View>
              <View style={styles.forecastPartTemp}>
                <View style={styles.tempContainer}>
                  <TextDefault bold fontSize={25}>
                    {forecast.parts.night.temp_max}
                  </TextDefault>
                  <View style={styles.celciusIcon} />
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
});
