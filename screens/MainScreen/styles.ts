import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
    },
    appcontainer: {
      flex: 1,
    },
    background: {
      zIndex: -1,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  });
};
