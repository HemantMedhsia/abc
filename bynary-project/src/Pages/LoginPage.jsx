import React, { useState } from "react";
import Input from "../Common/Input";
import FormButton from "../Common/Button";
import postApi from "../Utility/API/postApi";
import { toast, ToastContainer } from "react-toastify";

const AdminLoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [response, setResponse] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state
    const res = await postApi("adminLogin", formData, "", setResponse);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">Admin Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form>
          <div className="mb-4">
            <Input
              labelName="Email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <Input
              labelName="Password"
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <FormButton name="Login" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
