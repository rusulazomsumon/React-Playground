import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';



function App(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="card">
        <BrowserRouter>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <h1>Bismillahir Rahmanir Rahim</h1>
        <p>Allahu Akbar!</p>
        <button onClick={() => setCount(count+1)}>Zikir Counter: {count} </button>
      </div>
    </div>
  );
}

export default App;