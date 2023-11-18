import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./layout/Home";
import Navbar from "./components/Navbar";
import LocationProvider from "./context/LocationProvider";
import Main from "./components/Main";
import Details from "./components/Details";

const App = (): JSX.Element => {
  return (
    <>
      <LocationProvider>
        <Home>
          <Navbar />
          <Main />
          <Details />
        </Home>
      </LocationProvider>
      <ToastContainer
        theme="dark"
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </>
  );
};

export default App;
