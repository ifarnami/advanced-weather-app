import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { LocationContext } from "../../context/LocationProvider";
// import { LocationContextType } from "../../types/types";

interface ISearchLocationProps {}

const SearchLocation: React.FC<ISearchLocationProps> = (): JSX.Element => {
  const { location, setLocation, fetchLocationData } =
    useContext(LocationContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleClick = () => {
    fetchLocationData(location);
    setLocation("");
  };

  return (
    <div className="flex items-center border-b border-b-white pb-1">
      <input
        type="text"
        placeholder="Search Location..."
        className="bg-transparent text-white outline-none text-[rgba(255, 255, 255)] text-opacity-70 text-[12px]"
        value={location}
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