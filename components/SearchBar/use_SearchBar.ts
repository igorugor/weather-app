import {useEffect, useState} from 'react';
import {citiesStore} from '../../mobx/citiesStore/citiesStore';
import {weatherStore} from '../../mobx/weatherStore/weatherStore';

export const useSearchBar = () => {
  const {citiesList, error, pending, getCitiesList} = citiesStore;

  const {getWeatherData} = weatherStore;

  const [searchText, setSearchText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

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
    handleSetSearchText(city.name);
    getWeatherData({
      lat: city.latitude,
      lon: city.longitude,
    });
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
  };
};
