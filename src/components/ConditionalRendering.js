import React, { useState } from "react";

function App() {
    const [LoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
    <button onClick={() => setLoggedIn(!LoggedIn)}>
        {LoggedIn ? 'Logout' : 'Login'}
    </button>
    {LoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}
    </div>
  );
}

export default App;
