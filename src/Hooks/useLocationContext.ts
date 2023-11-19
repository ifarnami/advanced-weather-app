import { useContext } from "react";
import { LocationContext } from "../context/LocationProvider";

export const useLocationContext = () => {
  const locationData = useContext(LocationContext);

  if (locationData === undefined) {
    throw new Error("useLocationContext must be used with a LocationContext.");
  } else {
    return locationData;
  }
};
