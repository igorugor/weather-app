import React from 'react';
import {Image, View} from 'react-native';

import {SvgUri} from 'react-native-svg';
import {observer} from 'mobx-react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';

import {useStyle} from './styles';
import {TextDefault} from '../TextDefault/TextDefault';
import {localStrings} from '../../constants/localization';

interface IGeneralWeatherData {
  weatherIcon: string;
  temp: number;
  condition: string;
  windSpeed: number;
  humidity: number;
  tag: 'Yandex' | 'OpenWeather';
}

export const GeneralWeatherData: React.FC<IGeneralWeatherData> = observer(
  ({condition, humidity, temp, weatherIcon, windSpeed, tag}) => {
    const styles = useStyle();

    return (
      <View style={styles.container}>
        <View style={styles.generalDataContainer}>
          <View style={styles.imageContainer}>
            {tag === 'OpenWeather' ? (
              <Image
                source={{
                  uri: `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`,
                }}
                width="100%"
                height="100%"
              />
            ) : (
              <SvgUri
                uri={`https://yastatic.net/weather/i/icons/funky/dark/${weatherIcon}.svg`}
                width="100%"
                height="100%"
              />
            )}
          </View>

          <View style={styles.tempContainer}>
            <TextDefault bold fontSize={52}>
              {temp}
            </TextDefault>
            <View style={styles.celciusIcon} />
          </View>
          <TextDefault>{`${localStrings[condition]}`}</TextDefault>
          <View style={styles.extraData}>
            <View style={styles.extraItem}>
              <FontAwesomeIcons name="wind" color="#fff" size={20} />
              <TextDefault fontSize={18}>{windSpeed}km</TextDefault>
            </View>
            <View style={styles.extraItem}>
              <FontAwesomeIcons name="water" color="#fff" size={20} />
              <TextDefault fontSize={18}>{humidity}%</TextDefault>
            </View>
          </View>
        </View>
      </View>
    );
  },
);
