import React, { useState } from 'react';

function App(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="card">
        <h1>Bismillahir Rahmanir Rahim</h1>
        <p>Allahu Akbar!</p>
        <button onClick={() => setCount(count+1)}>Zikir Counter: {count} </button>
      </div>
    </div>
  );
}

export default App;