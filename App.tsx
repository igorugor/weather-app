import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {WeatherTest} from './components/WeatherTest';

export default function App() {
  StatusBar.setBarStyle('dark-content');
  return <WeatherTest />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
