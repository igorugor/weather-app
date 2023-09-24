import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
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
    inputRef,
  } = useSearchBar();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          ref={inputRef}
          style={styles.textInput}
          onChangeText={handleSetSearchText}
          value={searchText}
          placeholder="Search for cities..."
          placeholderTextColor="#fff"
        />
        <View style={styles.searchButton}>
          <FontAwesomeIcons name="search" color="#fff" size={20} />
        </View>
      </View>

      <View style={styles.citiesListContainer}>
        <ScrollView>
          {!error &&
            isVisible &&
            citiesList?.map(city => (
              <TouchableOpacity
                activeOpacity={0.7}
                key={city.id}
                style={styles.listElement}
                onPress={() => {
                  handleGetWeatherForecast(city);
                }}>
                <Text style={styles.listElementText}>
                  {city.name}, {city.country}
                </Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
      {error && (
        <View style={styles.listElement}>
          <Text style={styles.listElementText}>{error}</Text>
        </View>
      )}
    </View>
  );
});
