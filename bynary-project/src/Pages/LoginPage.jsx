import React, { useState } from "react";
import Input from "../Common/Input";
import FormButton from "../Common/Button";

const AdminLoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = async (e) => {
    const { id, value } = await e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              labelName="Username"
              id="username"
              value={formData.username}
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
