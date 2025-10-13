import { useState } from "react";

function useLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const login = (email, password) => {
    const validEmail = "admin@example.com";
    const validPassword = "12345";

    if (email === validEmail && password === validPassword) {
      const userData = { email };
      localStorage.setItem("user", JSON.stringify(userData));

      setIsLoggedIn(true);
      console.log(email, password);

      setError("");
      return true;
    } else {
      setIsLoggedIn(false);
      setError("Invalid email or password");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return { login, logout, isLoggedIn, error };
}

export default useLogin;
