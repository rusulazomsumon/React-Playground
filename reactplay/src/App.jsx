import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ContactViewPage from './pages/ContactViewPage';
import HomeViewPage from './pages/HomeViewPage';


function About() {
  // Content for About component
  return (
    <div>
      <h2>About Page</h2>
      {/* ... */}
    </div>
  );
}

function Blog() {
  // Content for Blog component
  return (
    <div>
      <h2>Blog Page</h2>
      {/* ... */}
    </div>
  );
}





function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="card">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact/view">Contact</Link>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<HomeViewPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact/view" element={<ContactViewPage />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
