import {StyleSheet} from 'react-native';

export const useStyle = () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 25,
      zIndex: 9999,
    },
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      flexDirection: 'row',
      position: 'relative',
    },
    searchButton: {
      position: 'absolute',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      top: 'auto',
      right: '5%',
      backgroundColor: 'grey',
      padding: 5,
      borderRadius: 50,
    },
    textInput: {
      height: 40,
      width: '100%',
      margin: 12,
      borderWidth: 2,
      paddingHorizontal: 20,
      borderRadius: 10,
      borderColor: '#fff',
      color: '#fff',
    },
    listElement: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingHorizontal: 15,
      width: '100%',
      height: 35,
      backgroundColor: 'grey',
      marginBottom: 2,
      borderRadius: 7,
    },
    listElementText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '500',
    },

    citiesListContainer: {
      position: 'absolute',
      top: 50,
      width: '100%',
    },
  });
};
