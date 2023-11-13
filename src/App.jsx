import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

const App = () => {
  return (

    
    <Router>
        
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    
  );
};

export default App;
