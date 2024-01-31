import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  // Content for Home component
  return (
    <div>
      <h2>Home Page</h2>
      {/* ... */}
    </div>
  );
}

function About() {
  // Content for About component
  return (
    <div>
      <h2>About Page</h2>
      {/* ... */}
    </div>
  );
}

function Contact() {
  // Content for Contact component
  return (
    <div>
      <h2>Contact Page</h2>
      {/* ... */}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="card">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <h1>Bismillahir Rahmanir Rahim</h1>
        <p>Allahu Akbar!</p>
        <button onClick={() => setCount(count + 1)}>Zikir Counter: {count}</button>
      </div>
    </BrowserRouter>
  );
}

export default App;
