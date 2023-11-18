export type DataType = {
  temp: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
  clouds: number;
  wind: number;
};

export type IconsType = {
  maxTemp: () => JSX.Element;
  minTemp: () => JSX.Element;
  wind: () => JSX.Element;
  humidity: () => JSX.Element;
  logo: () => JSX.Element;
  cloudy: (s?: string) => JSX.Element;
  rainy: (s?: string) => JSX.Element;
  clear: (s?: string) => JSX.Element;
  tornado: (s?: string) => JSX.Element;
  snow: (s?: string) => JSX.Element;
  drizzle: (s?: string) => JSX.Element;
  thunderstorm: (s?: string) => JSX.Element;
  cloud: (s?: string) => JSX.Element;
};

type WeatherDataType = {
  weather: string;
  time: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  icon_name: string;
  speed: number;
  clouds: number;
  city_name: string;
};

// # Contexts Types
export type BackgroundContextType = {
  condition: string;
  setCondition: React.Dispatch<React.SetStateAction<string>>;
};

export type LocationContextType = {
  location?: string;
  setLocation?: React.Dispatch<React.SetStateAction<string>>;
  fetchLocationData?: (loc: string) => void;
  weatherData: WeatherDataType;
};
