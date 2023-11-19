import { Icons } from "../../icons/Icons";
import { useLocationContext } from "../../Hooks/useLocationContext";

interface IDetailsProps {}

const Details: React.FC<IDetailsProps> = (): JSX.Element => {
  const { weatherData } = useLocationContext();
  const { weather, temp_max, temp_min, humidity, clouds, speed } = weatherData;

  return (
    <div className="pt-4 mt-20 lg:mt-0 flex flex-col h-screen items-center backdrop-blur-lg bg-white bg-opacity-[0.04] border-t-[5px] border-t-white border-opacity-[0.14]">
      <h4 className="text-sm">Weather Details...</h4>
      <p className="font-medium uppercase mt-5 text-sm">{weather}</p>
      <div className="flex w-full justify-around items-center mt-4">
        <ul className="text-opacity-[0.70] flex flex-col gap-6">
          <li>Temp max</li>
          <li>Temp min</li>
          <li>Humidity</li>
          <li>Cloudy</li>
          <li>Wind</li>
        </ul>
        <ul className="flex flex-col gap-6">
          <li className="flex items-center justify-between gap-2">
            <p>{temp_max} &deg;</p>
            {Icons.maxTemp()}
          </li>
          <li className="flex items-center justify-between gap-2">
            <p>{temp_min} &deg;</p>
            {Icons.minTemp()}
          </li>
          <li className="flex items-center justify-between gap-2">
            <p>{humidity}%</p>
            {Icons.humidity()}
          </li>
          <li className="flex items-center justify-between gap-2">
            <p>{clouds}%</p>
            {Icons.cloud()}
          </li>
          <li className="flex items-center justify-between gap-2">
            <p>
              {speed}
              <span className="text-xs">km/h</span>
            </p>
            {Icons.wind()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
