import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { urlGenerator } from "../constants/url";
import { toast } from "react-toastify";
import { BackgroundContextType } from "../constants/types";

interface IBackgroundProviderProps {
  children: JSX.Element | JSX.Element[];
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(
  undefined
);

const BakgroundProvider: React.FC<IBackgroundProviderProps> = ({
  children,
}): JSX.Element => {
  const [condition, setCondition] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      await axios(urlGenerator("tehran"))
        .then((res) => {
          const data = res.data;
          setCondition(data.weather[0].main.toLowerCase());
        })
        .catch((err) => console.log(err));
    };
    fetchWeather();
    toast.promise(fetchWeather, {
      pending: "Getting Data...",
      success: "Got Data...",
      error: "Request Rejected...",
    });
  }, []);

  return (
    <BackgroundContext.Provider value={{ condition, setCondition }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export default BakgroundProvider;
export { BackgroundContext };
