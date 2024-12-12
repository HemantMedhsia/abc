import React from "react";
import AdminLoginPage from "./Pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <AdminLoginPage />
    </div>
  );
};

export default App;
