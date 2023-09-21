import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {MainScreen} from './screens/MainScreen/MainScreen';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  StatusBar.setBarStyle('light-content');

  return (
    <LinearGradient
      colors={['#120045', '#51a0ff', '#00378a']}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.container}>
        <MainScreen />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {flex: 1},
});
