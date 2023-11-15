import { key } from "./apiKey";

export const urlGenerator = (city: string) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
};

// {
//   "coord": {
//     "lon": 51.4215,
//     "lat": 35.6944
// },
// "weather": [
//     {
//         "id": 721,
//         "main": "Haze",
//         "description": "haze",
//         "icon": "50d"
//     }
// ],
// "base": "stations",
// "main": {
//     "temp": 18.24,
//     "feels_like": 16.82,
//     "temp_min": 17.62,
//     "temp_max": 18.99,
//     "pressure": 1018,
//     "humidity": 27
// },
// "visibility": 4000,
// "wind": {
//     "speed": 3.09,
//     "deg": 190
// },
// "clouds": {
//     "all": 75
// },
// "dt": 1700037481,
// "sys": {
//     "type": 2,
//     "id": 47737,
//     "country": "IR",
//     "sunrise": 1700017781,
//     "sunset": 1700054890
// },
// "timezone": 12600,
// "id": 112931,
// "name": "Tehran",
// "cod": 200
// }
