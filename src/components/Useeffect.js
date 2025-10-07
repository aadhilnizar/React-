import React, { useState, useEffect } from 'react';

function UseEffectExmp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted (useEffect ran once)');
  }, [count]);  // Runs  once the value of count changes
    // [] - Empty dependency array means it runs only once when the component mounts
    // No dependency array means it runs on every render
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEffectExmp;