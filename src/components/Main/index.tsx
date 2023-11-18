import { useContext } from "react";
import { LocationContext } from "../../context/LocationProvider";
import { chooseIcon } from "../../utils/chooseIcon";

interface IMainProps {}

const Main: React.FC<IMainProps> = (): JSX.Element => {
  const { weatherData } = useContext(LocationContext);
  const { temp, city_name, icon_name, time } = weatherData;

  return (
    <div className="flex gap-3 items-end mt-28 px-6">
      <h2 className="text-6xl">{`${temp}`}&deg;</h2>
      <div>
        <h3 className="-mb-1 text-3xl">{city_name}</h3>
        <p className="text-[10px]">{time}</p>
      </div>
      <div>{chooseIcon(icon_name)}</div>
    </div>
  );
};

export default Main;
