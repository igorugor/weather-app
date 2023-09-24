import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Image} from 'react-native';
import {MainScreen} from './screens/MainScreen/MainScreen';
import {weatherStore} from './mobx/weatherStore/weatherStore';
import {ProggressBar} from './components/ProggressBar/ProggressBar';

export default function App() {
  StatusBar.setBarStyle('light-content');

  const {pending} = weatherStore;

  if (pending) {
    return <ProggressBar />;
  }

  return (
    <>
      <Image
        style={styles.background}
        source={require('./assets/backgrounds/photo-1536510657370-18a343d1bf8d.jpeg')}
        resizeMode="cover"
        blurRadius={50}
      />
      <SafeAreaView style={styles.container}>
        <MainScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {flex: 1},
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});
