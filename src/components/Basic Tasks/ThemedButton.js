import React, { useContext } from "react";
import { ThemeContext } from "./UserContext";

function ThemedButton() {
  // Step 3: Consume context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
     <h1> Current Theme: {theme} </h1>
    </button>
  );
}

export default ThemedButton;
    