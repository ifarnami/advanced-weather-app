import { useContext } from "react";
import { LocationContext } from "../../context/LocationProvider";
import { chooseIcon } from "../../utils/chooseIcon";

interface IMainProps {}

const Main: React.FC<IMainProps> = (): JSX.Element => {
  const locationContext = useContext(LocationContext);
  const weatherData = locationContext?.weatherData;

  return (
    <div className="flex gap-3 items-end mt-28 lg:mt-10 lg:mb-10 px-6">
      <h2 className="text-6xl lg:text-8xl">{`${weatherData?.temp}`}&deg;</h2>
      <div>
        <h3 className="-mb-1 text-3xl lg:text-5xl">{weatherData?.city_name}</h3>
        <p className="text-[10px] lg:text-[16px] pl-2">{weatherData?.time}</p>
      </div>
      <div>
        {weatherData?.icon_name !== undefined &&
          chooseIcon(weatherData?.icon_name)}
      </div>
    </div>
  );
};

export default Main;
