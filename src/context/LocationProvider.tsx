import { createContext, useEffect, useState } from "react";
import { LocationContextType } from "../types/types";
import axios from "axios";
import { urlGenerator } from "../constants/url";
import { toast } from "react-toastify";

interface ILocationProps extends React.PropsWithChildren {}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

const LocationProvider: React.FC<ILocationProps> = ({
  children,
}): JSX.Element => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState({
    weather: "",
    time: "",
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    speed: 0,
    clouds: 0,
    city_name: "",
    icon_name: "",
  });

  useEffect(() => {
    const firstTimeFetch = async () => {
      await axios(`${urlGenerator("tehran")}`)
        .then((res) => {
          const data = res.data;
          setWeatherData({
            ...weatherData,
            weather: data.weather[0].main,
            time: new Date().toDateString(),
            temp: Math.floor(data.main.temp),
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            temp_max: Math.floor(data.main.temp_max),
            temp_min: Math.floor(data.main.temp_min),
            speed: data.wind.speed,
            clouds: data.clouds.all,
            city_name: data.name,
            icon_name: data.weather[0].main,
          });
        })
        .catch((err) => {
          throw new Error(err);
        });
    };

    firstTimeFetch();
    toast.promise(firstTimeFetch, {
      pending: "Loading data for Tehran",
      success: "Successful!",
      error: "We hit a roadblock!",
    });
  }, []);

  const fetchLocationData = async (loc: string) => {
    toast.info("Getting weather data...");
    await axios(`${urlGenerator(loc)}`)
      .then((res) => {
        toast.success("Success!");
        const data = res.data;
        console.log(data);
        setWeatherData({
          ...weatherData,
          weather: data.weather[0].main,
          temp: Math.floor(data.main.temp),
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          speed: data.wind.speed,
          clouds: data.clouds.all,
          city_name: data.name,
          icon_name: data.weather[0].main,
        });
      })
      .catch((err) => {
        toast.error("We hit a roadblock!");
        throw new Error(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
        fetchLocationData,
        weatherData,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
export { LocationContext };
