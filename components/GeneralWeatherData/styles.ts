import {StyleSheet} from 'react-native';

export const useStyle = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      paddingTop: 35,
    },
    temperature: {
      fontSize: 36,
      fontWeight: '700',
      color: '#fff',
    },
    locality: {
      fontSize: 24,
      fontWeight: '500',
      color: '#fff',
    },
    tempContainer: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    celciusIcon: {
      position: 'absolute',
      top: '20%',
      right: '-5%',
      width: 15,
      height: 15,
      borderRadius: 50,
      borderWidth: 4,
      borderColor: '#fff',
    },

    imageContainer: {
      width: 200,
      height: 200,
    },

    generalDataContainer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    cityTitleContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },

    extraData: {
      marginTop: 35,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 25,
      flexDirection: 'row',
    },

    extraItem: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 8,
    },
  });
};
