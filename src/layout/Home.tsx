interface IHomeProps {
  children: JSX.Element | JSX.Element[];
}

const Home: React.FC<IHomeProps> = ({ children }): JSX.Element => {
  return (
    <div className="h-screen overflow-hidden bg-mobile-rain md:bg-tablet-thunder lg:bg-desktop-snow  bg-center bg-cover bg-no-repeat text-white flex flex-col justify-between items-center lg:flex-row lg:items-start">
      <div className="h-screen w-full bg-[rgb(200,200,200)] bg-opacity-5">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Home;
