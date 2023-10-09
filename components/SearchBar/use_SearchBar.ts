import {useEffect, useRef, useState} from 'react';
import {citiesStore} from '../../mobx/citiesStore/citiesStore';
import {weatherStore} from '../../mobx/weatherStore/weatherStore';
import {TextInput} from 'react-native';
import {storeData} from '../../constants/asyncStorage';

export const useSearchBar = () => {
  const {citiesList, error, pending, getCitiesList} = citiesStore;

  const inputRef = useRef<TextInput>();

  const {getWeatherData, weatherState} = weatherStore;

  const [searchText, setSearchText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isInputShown, setIsInputShown] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleShowModal = () => {
    setModalVisible(true);
  };

  const handleHideModal = () => {
    setModalVisible(false);
  };

  const handleSetSearchText = (value: string) => {
    if (!isVisible) {
      setIsVisible(true);
    }
    setSearchText(value);
    if (value.length === 0) {
      setIsVisible(false);
    }
  };

  const handleGetWeatherForecast = (city: ICityListObj) => {
    setIsVisible(false);
    setIsInputShown(false);
    handleHideModal();
    inputRef.current?.blur();
    handleSetSearchText(city.name);
    getWeatherData({
      lat: city.latitude,
      lon: city.longitude,
    });

    storeData('coordinates', {
      lat: city.latitude,
      lon: city.longitude,
    });
  };

  const handleIsInputShown = (value: boolean) => {
    setIsInputShown(value);
    inputRef.current?.focus();

    if (!value) {
      setIsVisible(false);
      inputRef.current?.blur();
    }
  };

  useEffect(() => {
    getCitiesList(searchText);
  }, [searchText]);

  return {
    searchText,
    handleSetSearchText,
    citiesList,
    error,
    pending,
    getWeatherData,
    setIsVisible,
    isVisible,
    handleGetWeatherForecast,
    inputRef,
    handleIsInputShown,
    isInputShown,
    setIsInputShown,
    weatherState,
    handleShowModal,
    handleHideModal,
    isModalVisible,
  };
};
