interface IHomeProps {
  children: JSX.Element | JSX.Element[];
}

const Home: React.FC<IHomeProps> = ({ children }): JSX.Element => {
  return (
    <div className="h-screen">
      <h1>{children}</h1>
    </div>
  );
};

export default Home;
