import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./Pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllUser from "./Pages/AllUser";
import RegistrationPage from "./Pages/RegistrationPage";
import AdminUserPage from "./Pages/AdminUserPage";
import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<AdminLoginPage />} />
            <Route path="/all-user" element={<AllUser />} />
            <Route path="/user-register" element={<RegistrationPage />} />
            <Route path="/user-edit-delete" element={<AdminUserPage />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
