import { FaSearch } from "react-icons/fa";
import { useLocationContext } from "../../Hooks/useLocationContext";

interface ISearchLocationProps {}

const SearchLocation: React.FC<ISearchLocationProps> = (): JSX.Element => {
  const locationContext = useLocationContext();
  const { fetchLocationData, setLocation, location } = locationContext;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleClick = () => {
    fetchLocationData(location);
    setLocation("");
  };

  return (
    <div className="flex items-center border-b border-b-white pb-1 lg:w-52 justify-between">
      <input
        type="text"
        placeholder="Search Location..."
        className="bg-transparent text-white outline-none text-[rgba(255, 255, 255)] text-opacity-70 text-[12px] lg:text-[16px]"
        value={locationContext?.location}
        onChange={handleChange}
      />
      <div
        onClick={handleClick}
        className="cursor-pointer active:text-gray-600"
      >
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchLocation;
