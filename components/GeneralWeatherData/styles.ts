import {StyleSheet} from 'react-native';

export const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    temperature: {
      fontSize: 36,
      fontWeight: '700',
      color: '#fff',
    },
  });
};
