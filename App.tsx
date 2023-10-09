import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {MainScreen} from './screens/MainScreen/MainScreen';
import {OpenWeatherScreen} from './screens/OpenWeatherScreen/OpenWeatherScreen';
import {SearchBar} from './components/SearchBar/SearchBar';
import Modal from 'react-native-modal';
import {TextDefault} from './components/TextDefault/TextDefault';
import {weatherStore} from './mobx/weatherStore/weatherStore';

export default function App() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Image
        style={styles.background}
        source={require('./assets/backgrounds/photo-1536510657370-18a343d1bf8d.jpeg')}
        resizeMode="cover"
        blurRadius={50}
      />

      <SearchBar />

      <Tab.Navigator
        sceneContainerStyle={styles.scene}
        screenOptions={{
          tabBarStyle: {
            display: 'none',
          },
        }}>
        <Tab.Screen name="Yandex" component={MainScreen} />
        <Tab.Screen name="OpenWeather" component={OpenWeatherScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  scene: {
    backgroundColor: 'transparent',
    zIndex: -1,
  },
});
