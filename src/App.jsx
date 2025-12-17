// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainDashboard from './pages/MainDashboard';
import About from './pages/About';
import PerfumeDetails from './pages/PerfumeDetails';

import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/perfume/:id" element={<PerfumeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
