import {StyleSheet} from 'react-native';

export const useStyle = () => {
  return StyleSheet.create({
    flex: {
      flex: 1,
    },
    container: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 25,
      paddingTop: 25,
      zIndex: 10,
    },
    IOSPadding: {
      paddingTop: 55,
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
      top: 0,
      right: -5,
      backgroundColor: 'grey',
      padding: 8,
      borderRadius: 50,
    },
    textInput: {
      marginTop: 5,
      height: 45,
      width: '100%',
      borderWidth: 2,
      paddingHorizontal: 20,
      borderRadius: 10,
      borderColor: 'grey',
      color: '#fff',
    },
    IOSMargin: {
      marginTop: 55,
    },
    listElement: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 10,
      paddingHorizontal: 15,
      paddingVertical: 7,
      width: '100%',
      height: '100%',
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
      top: 60,
      width: '100%',
      backgroundColor: 'black',
      borderRadius: 50,
    },

    cityTitleContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 60,
    },
  });
};
