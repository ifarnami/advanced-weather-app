export type DataType = {
  temp: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
  clouds: number;
  wind: number;
};

export type BackgroundContextType = {
  condition: string;
  setCondition: React.Dispatch<React.SetStateAction<string>>;
};

export type Icons = {
  maxTemp: () => JSX.Element;
  minTemp: () => JSX.Element;
  wind: () => JSX.Element;
  humidity: () => JSX.Element;
  cloudy: () => JSX.Element;
};
