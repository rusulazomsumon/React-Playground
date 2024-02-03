import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ContactViewPage from './pages/ContactViewPage';
import HomeViewPage from './pages/HomeViewPage';
import AboutViewPage from './pages/AboutViewPage';
import BlogViewPage from './pages/BlogViewPage';


function App() {
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
          <Route path="/about" element={<AboutViewPage />} />
          <Route path="/blog" element={<BlogViewPage />} />
          <Route path="/contact/view" element={<ContactViewPage />} />
        </Routes>

        <div className="footer">
          <p>footer elements</p>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
