// src/components/LoginCustomHook.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMessage } from "../Register Login Custom Hook/MessageContext";
import Message from "./Message";

const LoginCustomHook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { showError, showSuccess } = useMessage();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      showError("Please fill in both fields!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify({ email: user.email }));
      showSuccess("✅ Login successful!");

      setTimeout(() => {
        // navigate("/"); 
      }, 1000);
    } else {
      showError("❌ Invalid email or password!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        <Message />

        <label>Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginCustomHook;
