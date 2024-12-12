import React from "react";
import AdminLoginPage from "./Pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllUser from "./Pages/AllUser";
import RegistrationPage from "./Pages/RegistrationPage";
import AdminUserPage from "./Pages/AdminUserPage";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <AdminLoginPage />
      <AllUser/>
      <RegistrationPage/>
      <AdminUserPage/>
    </div>
  );
};

export default App;
