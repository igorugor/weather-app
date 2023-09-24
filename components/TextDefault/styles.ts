import {StyleSheet} from 'react-native';

export const useStyle = () => {
  return StyleSheet.create({
    text: {
      color: '#fff',
      fontWeight: '500',
      textAlign: 'center',
    },
    boldText: {
      fontWeight: '700',
    },
  });
};
