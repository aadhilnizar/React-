import React from 'react';

 const MyComponent = ({ data }) => {
  console.log('MyComponent is rendering');
  return <div>{data}</div>;
};

// Memoize MyComponent
const MemoizedMyComponent = React.memo(MyComponent);

 const ParentComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      {/* MemoizedMyComponent will only re-render if its 'data' prop changes */}
      <MemoizedMyComponent data="Static Data" /> 
    </div>
  );
};
export { MyComponent, MemoizedMyComponent, ParentComponent };
// The MyComponent will only re-render if the props changes,when the values in the count change
// on clicking the count button the MyComponent wont re render because it is memoized
