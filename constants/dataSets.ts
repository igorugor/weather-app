import SVG_HAIL from '../assets/svg/wi-hail.svg';
import SVG_CLOUDY from '../assets/svg/wi-cloudy.svg';

const weatherIcons: Record<IWeatherCondition, string> = {
  'heavy-rain': '',
  clear: '',
  cloudy: SVG_CLOUDY,
  'light-rain': '',
  'partly-cloudy': '',
  'snow-showers': '',
  'thunderstorm-with-hail': '',
  'thunderstorm-with-rain': '',
  'wet-snow': '',
  snow: '',
  showers: '',
  overcast: '',
  rain: '',
  hail: SVG_HAIL,
  thunderstorm: '',
};

export {weatherIcons};
