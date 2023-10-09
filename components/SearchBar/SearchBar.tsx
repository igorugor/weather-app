import React from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {observer} from 'mobx-react';

import {useSearchBar} from './use_SearchBar';
import {useStyle} from './styles';

import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import {TextDefault} from '../TextDefault/TextDefault';
import Modal from 'react-native-modal';

export const SearchBar = observer(() => {
  const styles = useStyle();

  const {
    citiesList,
    error,
    handleSetSearchText,
    searchText,
    handleGetWeatherForecast,
    isVisible,
    isInputShown,
    handleIsInputShown,
    inputRef,
    setIsInputShown,
    setIsVisible,
    weatherState,
    handleHideModal,
    handleShowModal,
    isModalVisible,
  } = useSearchBar();

  if (!weatherState) {
    return null;
  }

  const {geo_object} = weatherState;

  return (
    <>
      <View>
        <View
          style={[
            styles.container,
            Platform.OS === 'ios' ? styles.IOSPadding : undefined,
          ]}>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.searchButton}
              activeOpacity={0.7}
              onPress={() => {
                handleIsInputShown(!isInputShown);
                handleShowModal();
                inputRef.current?.focus();
              }}>
              <FontAwesomeIcons name="search" color="#fff" size={27} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cityTitleContainer}>
          <TextDefault bold fontSize={24}>
            {geo_object?.locality?.name ?? geo_object?.province?.name}
          </TextDefault>
          <TextDefault>{`, ${geo_object.country.name}`}</TextDefault>
        </View>
      </View>
      <Modal
        isVisible={isModalVisible}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}>
        <TouchableOpacity style={styles.flex} onPress={handleHideModal}>
          <View style={styles.flex}>
            <TextInput
              ref={inputRef}
              style={[
                styles.textInput,
                Platform.OS === 'ios' ? styles.IOSMargin : undefined,
              ]}
              onChangeText={handleSetSearchText}
              onSubmitEditing={() => {
                inputRef.current?.blur();
                setIsInputShown(false);
                setIsVisible(false);
              }}
              value={searchText}
              placeholder="Search for cities..."
              placeholderTextColor="#fff"
            />

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
                      <FontAwesomeIcons
                        name="map-marker"
                        color="#fff"
                        size={16}
                      />
                      <Text style={styles.listElementText}>
                        {city.name}, {city.country}
                      </Text>
                    </TouchableOpacity>
                  ))}
              </ScrollView>
              {error && (
                <View style={styles.listElement}>
                  <Text style={styles.listElementText}>{error}</Text>
                </View>
              )}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
});
