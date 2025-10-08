import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState("Hello Moto!");

  // Inline animation style for h1
  const h1Style = {
    display: 'inline-block',
    color: 'red',
    transition: 'transform 0.5s, color 0.5s',
    transform: message === "Welcome to React!" ? 'scale(1.2)' : 'scale(1)',
    animation: message === "Welcome to React!" ? 'colorChange 1s' : 'none',
  };

  // Inline keyframes for color animation
  const styleSheet = `@keyframes colorChange { 0% { color: red; } 100% { color: green; } }`;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <style>{styleSheet}</style>
      <h1 style={h1Style}>{message}</h1>
      <button onClick={() => setMessage("Welcome to React!")}> 
        Click Me!
      </button>
    </div>
  );
}

export default App;
