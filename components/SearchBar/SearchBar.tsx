import React from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';

import {useSearchBar} from './use_SearchBar';
import {useStyle} from './styles';

import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

export const SearchBar = observer(() => {
  const styles = useStyle();

  const {
    citiesList,
    error,
    handleSetSearchText,
    searchText,
    handleGetWeatherForecast,
    isVisible,
  } = useSearchBar();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={handleSetSearchText}
          value={searchText}
          placeholder="Вводите название города"
          placeholderTextColor={'#FFF'}
        />
        <View style={styles.searchButton}>
          <FontAwesomeIcons name="search" color="#fff" size={20} />
        </View>
      </View>

      {!error &&
        isVisible &&
        citiesList?.map(city => (
          <TouchableOpacity
            key={city.id}
            style={styles.listElement}
            onPress={() => {
              handleGetWeatherForecast(city);
            }}>
            <Text style={styles.listElementText}>
              {city.name} , {city.country}
            </Text>
          </TouchableOpacity>
        ))}
      {error && (
        <View style={styles.listElement}>
          <Text style={styles.listElementText}>{error}</Text>
        </View>
      )}
    </View>
  );
});
