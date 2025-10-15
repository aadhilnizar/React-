// hooks/useLogin.js
import { useState } from "react";

function useLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists
    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      localStorage.setItem("user", JSON.stringify({ email }));
      setIsLoggedIn(true);
      setError("");
      return { success: true, message: "✅ Login successful!" };
    } else {
      setError("❌ Invalid email or password");
      setIsLoggedIn(false);
      return { success: false, message: "❌ Invalid email or password" };
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return { login, logout, isLoggedIn, error };
}

export default useLogin;
