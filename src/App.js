import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar.js';
import SignUp from './signupSection.js';
import AppDesc from './appDescSection.js';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
    <SignUp />
    <AppDesc />
  </div>
    </div>
  );
}

export default App;
