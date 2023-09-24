import React from 'react';
import {View} from 'react-native';

import {useGeneralWeatherData} from './use_GeneralWeatherData';
import {useStyle} from './styles';
import {observer} from 'mobx-react';
import {TextDefault} from '../TextDefault/TextDefault';
import {SvgUri} from 'react-native-svg';

import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';

export const GeneralWeatherData = observer(() => {
  const styles = useStyle();

  const {pending, weatherState} = useGeneralWeatherData();

  if (!weatherState || pending) {
    return null;
  }

  const {fact, geo_object} = weatherState;

  return (
    <View style={styles.container}>
      <View style={styles.generalDataContainer}>
        <View style={styles.cityTitleContainer}>
          <TextDefault bold fontSize={24}>
            {geo_object.locality.name}
          </TextDefault>
          <TextDefault>{`, ${geo_object.country.name}`}</TextDefault>
        </View>
        <View style={styles.imageContainer}>
          <SvgUri
            uri={`https://yastatic.net/weather/i/icons/funky/dark/${fact.icon}.svg`}
            width="100%"
            height="100%"
          />
        </View>

        <View style={styles.tempContainer}>
          <TextDefault bold fontSize={52}>
            {fact.temp}
          </TextDefault>
          <View style={styles.celciusIcon} />
        </View>
        <TextDefault>{fact.condition}</TextDefault>
        <View style={styles.extraData}>
          <View style={styles.extraItem}>
            <FontAwesomeIcons name="wind" color="#fff" size={20} />
            <TextDefault fontSize={18}>{fact.wind_speed}km</TextDefault>
          </View>
          <View style={styles.extraItem}>
            <FontAwesomeIcons name="water" color="#fff" size={20} />
            <TextDefault fontSize={18}>{fact.soil_moisture * 100}%</TextDefault>
          </View>
        </View>
      </View>
    </View>
  );
});
