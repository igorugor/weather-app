import React from 'react';
import {Image, ScrollView, View} from 'react-native';

import moment from 'moment';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import {TextDefault} from '../TextDefault/TextDefault';
import {weatherStore} from '../../mobx/weatherStore/weatherStore';
import {useStyle} from './styles';
import {SvgUri} from 'react-native-svg';
import {observer} from 'mobx-react';

interface IForecasts {
  forecasts: IForecastProps[];
  tag: 'Yandex' | 'OpenWeather';
}

export const Forecasts: React.FC<IForecasts> = observer(({forecasts, tag}) => {
  const styles = useStyle();

  const {pending, weatherState, openWeatherState} = weatherStore;

  if (!weatherState || pending || !openWeatherState || !forecasts) {
    return null;
  }

  //const {forecasts} = weatherState;

  // const {daily} = openWeatherState;

  // const t = daily.map(fc => ({
  //   date: fc.dt,
  //   dayIcon: fc.weather[0].icon,
  //   nightIcon: fc.weather[0].icon,
  //   dayTemp: fc.temp.max,
  //   nightTemp: fc.temp.min,
  // }));

  // const f = forecasts.map(fc => ({
  //   date: fc.date,
  //   dayIcon: fc.parts.day.icon,
  //   nightIcon: fc.parts.night.icon,
  //   dayTemp: fc.parts.day.temp_max,
  //   nightTemp: fc.parts.night.temp_max,
  // }));

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
                {tag === 'OpenWeather' ? (
                  <Image
                    source={{
                      uri: `https://openweathermap.org/img/wn/${forecast.dayIcon}@2x.png`,
                    }}
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <SvgUri
                    uri={`https://yastatic.net/weather/i/icons/funky/dark/${forecast.dayIcon}.svg`}
                    width="100%"
                    height="100%"
                  />
                )}
              </View>
              <View style={styles.forecastPartTemp}>
                <TextDefault fontSize={20}>
                  {moment(forecast.date).utc().format('dddd')}
                </TextDefault>
                <View style={styles.tempContainer}>
                  <TextDefault bold fontSize={25}>
                    {forecast.dayTemp}
                  </TextDefault>
                  <View style={styles.celciusIcon} />
                </View>
              </View>
            </View>

            <View style={styles.forecastPart}>
              <View style={styles.imageContainer}>
                {tag === 'OpenWeather' ? (
                  <Image
                    source={{
                      uri: `https://openweathermap.org/img/wn/${forecast.nightIcon}@2x.png`,
                    }}
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <SvgUri
                    uri={`https://yastatic.net/weather/i/icons/funky/dark/${forecast.nightIcon}.svg`}
                    width="100%"
                    height="100%"
                  />
                )}
              </View>
              <View style={styles.forecastPartTemp}>
                <View style={styles.tempContainer}>
                  <TextDefault bold fontSize={25}>
                    {forecast.nightTemp}
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
