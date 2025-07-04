import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Topbar from './components/Navbar/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';

import Home from './Pages/Home/Home';
import About from './Pages/Home/About/About';
import Contact from './Pages/Home/Contact/Contact';
import Services from './Pages/Home/Services/Services';
import Blog from './Pages/Home/Blog/Blog';

const App = () => {
  return (
    <Router>
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;