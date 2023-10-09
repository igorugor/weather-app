import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
    },
    appcontainer: {
      flex: 1,
      justifyContent: 'space-between',
    },
    scrollContainer: {
      justifyContent: 'space-between',
      flex: 1,
    },
  });
};
