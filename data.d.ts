type GeoObject = {
  id: number;
  name: string;
};

type IWeatherCondition =
  | 'overcast'
  | 'cloudy'
  | 'clear'
  | 'partly-cloudy'
  | 'light-rain'
  | 'rain'
  | 'heavy-rain'
  | 'showers'
  | 'wet-snow'
  | 'snow'
  | 'snow-showers'
  | 'hail'
  | 'thunderstorm'
  | 'thunderstorm-with-rain'
  | 'thunderstorm-with-hail';

type IWindDirection = 'n' | 'w' | 's' | 'e' | 'nw' | 'ne' | 'se' | 'sw';

type ISeason = 'summer' | 'autumn' | 'winter' | 'spring';

enum PrecTypes {
  NoPrecs = 0,
  Rain = 1,
  RainAndSnow = 2,
  Snow = 3,
  Hail = 4,
}

enum PrecStrengthTypes {
  NoPrecs = 0,
  Weak = 0.25,
  Normal = 0.5,
  Strong = 0.75,
  VeryStrong = 1,
}

interface IWeatherDataParam {
  long: number;
  lat: number;
}

interface ICityListObj {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  feature_code: string;
  country_code: string;
  timezone: string;
  country_id: number;
  country: string;
}

interface IForecast {
  date: string;
  moon_code: number;
  parts: {
    day: IForecastPart;
    night: IForecastPart;
  };
  rise_begin: string;
  sunset: string;
}

interface IForecastProps {
  dayIcon: string;
  nightIcon: string;
  date: number | string;
  dayTemp: number;
  nightTemp: number;
}

interface IForecastPart {
  _source: string;
  cloudness: number;
  condition: string;
  daytime: 'd' | 'n';
  feels_like: number;
  fresh_snow_mm: number;
  humidity: number;
  icon: string;
  polar: boolean;
  prec_mm: number;
  prec_period: number;
  prec_prob: number;
  prec_strength: PrecStrengthTypes;
  prec_type: PrecTypes;
  pressure_mm: number;
  pressure_pa: number;
  soil_moisture: number;
  soil_temp: number;
  temp_avg: number;
  temp_max: number;
  temp_min: number;
  uv_index: number;
  wind_dir: IWindDirection;
  wind_gust: number;
  wind_speed: number;
}

interface IWeatherObj {
  fact: {
    temp: number;
    feels_like: number;
    condition: IWeatherCondition;
    wind_speed: number;
    wind_dir: IWindDirection;
    pressure_mm: number;
    humidity: number;
    daytime: 'd' | 'n';
    season: ISeason;
    is_thunder: boolean;
    prec_type: PrecTypes;
    prec_strength: PrecStrengthTypes;
    cloudness: PrecStrengthTypes;
    phenom_icon: string;
    soil_moisture: number;
    soil_temp: number;
    icon: string;
  };
  geo_object: {
    province: GeoObject;
    country: GeoObject;
    locality: GeoObject;
  };

  forecasts: IForecast[];
}

interface IWeatherDataParams {
  lat: number;
  lon: number;
}

interface IOpenWeatherWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

type IOpenWeatherDailyForecast = Array<{
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  temp: {
    max: number;
    min: number;
  };
  weather: IOpenWeatherWeather[];
}>;

interface IOpenWeatherForecastObj {
  lan: number;
  lon: number;
  current: {
    temp: number;
    pressure: number;
    humidity: number;
    clouds: number;
    wind_speed: number;
    weather: IOpenWeatherWeather[];
  };
  daily: IOpenWeatherDailyForecast;
}

interface IOpenMeteoObj {
  current: {
    time: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    precipitation: number;
    rain: number;
    showers: number;
    snowfall: number;
    windspeed_10m: number;
  };
  daily: {
    time: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
    rain_sum: number[];
    showers_sum: number[];
    snowfall_sum: number[];
    windspeed_10m_max: number[];
  };
}
