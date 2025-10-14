import React, { useState } from "react";
import useLogin from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusDiv, setStatusDiv] = useState(null);

  const { login, logout, isLoggedIn } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();


    const div = login(
      email,
      password,
      email === "admin@example.com" && password === "12345"
        ? " Login Successful!"
        : " Invalid email or password"
    );
    setStatusDiv(div);
  };

  const handleLogout = () => {
    const div = logout("Logged out successfully!");
    setStatusDiv(div);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96 transition-all"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <label className="block mb-2 text-gray-700 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          placeholder="Enter your email"
        />

        <label className="block mb-2 text-gray-700 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
          placeholder="Enter your password"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-200"
        >
          Login
        </button>

        {isLoggedIn && (
          <button
            type="button"
            onClick={handleLogout}
            className="w-full mt-4 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg font-semibold transition duration-200"
          >
            Logout
          </button>
        )}

        {/* Render success/error message */}
        {statusDiv}
      </form>
    </div>
  );
}

export default LoginForm;
