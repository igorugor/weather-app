import {StyleSheet} from 'react-native';

export const useStyle = () => {
  return StyleSheet.create({
    forecastContainer: {
      position: 'absolute',
      bottom: 0,
      alignItems: 'flex-start',
    },
    title: {
      marginLeft: 15,
      marginBottom: 5,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 15,
    },
    forecasts: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    forecast: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      width: 180,
      height: 150,
      margin: 10,
      backgroundColor: '#0101',
      borderRadius: 15,
      gap: 15,
    },
    tempContainer: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
    celciusIcon: {
      position: 'absolute',
      top: '20%',
      right: '-20%',
      width: 10,
      height: 10,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: '#fff',
    },
    imageContainer: {
      width: 35,
      height: 35,
      marginBottom: 10,
      borderRadius: 50,
    },
    forecastPart: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: 20,
    },
    forecastPartTemp: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  });
};