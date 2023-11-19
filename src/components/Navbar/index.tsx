import { Icons } from "../../icons/Icons";
import SearchLocation from "../SearchLocation";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (): JSX.Element => {
  return (
    <div className="flex items-center justify-between py-5 px-6">
      <div className="lg:hidden">{Icons.logo()}</div>
      <div className="md:hidden sm:hidden xs:hidden lg:block">
        {Icons.logo(100)}
      </div>
      <div>
        <SearchLocation />
      </div>
    </div>
  );
};

export default Navbar;
