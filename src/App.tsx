import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./layout/Home";

const App = (): JSX.Element => {
  return (
    <>
      <Home>
        <h1>Hello</h1>
      </Home>
      <ToastContainer
        theme="dark"
        position="top-left"
        autoClose={3000}
        hideProgressBar={true}
      />
    </>
  );
};

export default App;
