import {StyleSheet} from 'react-native';

export const useStyle = () => {
  return StyleSheet.create({
    proggressBarContainer: {
      position: 'absolute',
      top: 100,
      left: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
