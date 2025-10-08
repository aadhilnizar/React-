import React, { useRef, useState } from 'react';

function Example() {
  const inputRef = useRef(null);
  const [renderCount, setRenderCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input value:', inputRef.current.value);
    console.log('Render count:', renderCount);
  };

  return (
    <div>
      <p>Render count: {renderCount}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setRenderCount(renderCount + 1)}>
        Force Re-render
      </button>
    </div>
  );
}

export default Example;