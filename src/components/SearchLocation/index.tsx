import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { LocationContext } from "../../context/LocationProvider";
// import { LocationContextType } from "../../types/types";

interface ISearchLocationProps {}

const SearchLocation: React.FC<ISearchLocationProps> = (): JSX.Element => {
  const locationContext = useContext(LocationContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setLocation(e.target.value);
    locationContext?.setLocation !== undefined &&
      locationContext?.setLocation(e.target.value);
  };

  const handleClick = () => {
    locationContext?.fetchLocationData &&
      locationContext.location !== undefined &&
      locationContext?.fetchLocationData(locationContext.location);
    locationContext?.setLocation !== undefined &&
      locationContext.setLocation("");
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
