import { Icons } from "../../icons/Icons";
import SearchLocation from "../SearchLocation";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (): JSX.Element => {
  return (
    <div className="flex items-center justify-between py-5 px-6">
      <div>{Icons.logo()}</div>
      <SearchLocation />
    </div>
  );
};

export default Navbar;
