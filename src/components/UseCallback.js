import React, { useState, useCallback } from "react";

// Child Component
const Button = React.memo(({ onClick }) => {
  console.log("Button rendered!");
  return <button onClick={onClick}>Increment</button>;
});

function Apps() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  // useCallback -> keeps same function reference unless count changes
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Count: {count}</h2>
      <Button onClick={increment} />

      <h2>Other: {other.toString()}</h2>
      <button onClick={() => setOther(!other)}>Toggle Other</button>
    </div>
  );
}

export default Apps;
