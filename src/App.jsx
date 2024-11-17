import { Route, Routes } from "react-router-dom";

import handleShowToast from "./functions/showToast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home handleShowToast={handleShowToast} />} />
        <Route path="/home" element={<Home handleShowToast={handleShowToast} />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} theme="dark" />
    </>
  );
}

export default App;
