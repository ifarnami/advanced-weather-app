import { Icons } from "../icons/Icons";

export const chooseIcon = (name: string) => {
  switch (name) {
    case "Clouds":
      console.log("Clouds has recived");
      return Icons.cloudy();

    case "Rain":
      return Icons.rainy();

    case "Drizzle":
      return Icons.drizzle();

    case "Tornado" ||
      "Squall" ||
      "Ash" ||
      "Dust" ||
      "Sand" ||
      "Fog" ||
      "Haze" ||
      "Smoke" ||
      "Mist":
      return Icons.tornado();

    case "Thunderstorm":
      return Icons.thunderstorm();

    case "Snow":
      return Icons.snow();

    case "Clear":
      return Icons.clear();

    default:
      return null;
  }
};
