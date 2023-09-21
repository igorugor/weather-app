import {StyleSheet} from 'react-native';

export const useStyle = () => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      top: 10,
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
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
    },
    textInput: {
      height: 40,
      width: '100%',
      margin: 12,
      borderWidth: 1,
      paddingHorizontal: 20,
      borderRadius: 10,
      borderColor: 'grey',
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
      fontWeight: 500,
    },
  });
};
