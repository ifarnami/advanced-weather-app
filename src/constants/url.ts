import { key } from "./apiKey";

export const urlGenerator = (city: string) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
};
