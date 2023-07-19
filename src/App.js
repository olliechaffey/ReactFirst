import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './home';
import Projects from './projects';
import WeatherPage from './weatherPage';
import AboutPage from './aboutPage';
import CodeRunner from './CodeRunner';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/weatherApp" element={<WeatherPage />} />
          <Route path="/CodeRunner" element={<CodeRunner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
