import { useState } from "react";

function useLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password, message) => {
    const validEmail = "admin@example.com";
    const validPassword = "12345";

    const success = email === validEmail && password === validPassword;
    setIsLoggedIn(success);
    if (success) {
      localStorage.setItem("user", JSON.stringify({ email }));
    }

    return (
      <div
        className={`p-2 rounded mt-4 text-center ${
          success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
      >
        {message}
      </div>
    );
  };

  const logout = (message) => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);

    return (
      <div className="bg-gray-100 text-gray-700 p-2 rounded mt-4 text-center">
        {message}
      </div>
    );
  };

  return { login, logout, isLoggedIn };
}

export default useLogin;
