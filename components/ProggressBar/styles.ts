import {StyleSheet} from 'react-native';

export const useStyle = () => {
  return StyleSheet.create({
    proggressBarContainer: {
      flex: 1,
      position: 'absolute',
      top: '50%',
      left: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
