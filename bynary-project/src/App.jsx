import React from "react";
import AdminLoginPage from "./Pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  Navigate,
  createRoutesFromElements,
} from "react-router-dom";
import RegistrationPage from "./Pages/RegistrationPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="user-register" element={<RegistrationPage />} />
      <ToastContainer />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
