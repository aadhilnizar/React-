import React, { useState } from "react";
import useLogin from "../Register Login Custom Hook/useLogin";

function LoginCustomHook() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoggedIn, error } = useLogin();
  const [message, setMessage] = useState("");
  const [style, setStyle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(email, password);

    setMessage(result.message);
    setStyle(
      result.success
        ? "bg-green-100 text-green-700 border border-green-300"
        : "bg-red-100 text-red-700 border border-red-300"
    );

    // Clear message after 3s
    setTimeout(() => {
      setMessage("");
      setStyle("");
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        {/* Dynamic message box */}
        {message && (
          <div className={`p-2 rounded mb-3 text-center ${style}`}>
            {message}
          </div>
        )}

        <label className="block mb-2 text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
          placeholder="Enter your email"
        />

        <label className="block mb-2 text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
          placeholder="Enter your password"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>

        {isLoggedIn && (
          <p className="text-green-500 text-center mt-3">
            ✅ You are logged in!
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginCustomHook;
