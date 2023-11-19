import { chooseIcon } from "../../utils/chooseIcon";
import { useLocationContext } from "../../Hooks/useLocationContext";

interface IMainProps {}

const Main: React.FC<IMainProps> = (): JSX.Element => {
  const { weatherData } = useLocationContext();
  const { temp, city_name, time, icon_name } = weatherData;

  return (
    <div className="flex gap-3 items-end mt-28 lg:mt-10 lg:mb-10 px-6">
      <h2 className="text-6xl lg:text-8xl">{`${temp}`}&deg;</h2>
      <div>
        <h3 className="-mb-1 text-3xl lg:text-5xl">{city_name}</h3>
        <p className="text-[10px] lg:text-[16px] pl-2">{time}</p>
      </div>
      <div>{chooseIcon(icon_name)}</div>
    </div>
  );
};

export default Main;
