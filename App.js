import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"; // Importing BrowserRouter, Link, Route, and Routes
 // Importing the Dude component
import RegistrationForm from './RegistrationForm'; // Importing the RegistrationForm component

import logo from './ball-removebg-preview.png';
import img from './logo-removebg-preview.png';
import './App.css';
import './FONT.css';

function App() {
  return (
   
      <div className="App">
        {/* Left Image */}
        <img src={img} alt="left-img" className="Left-img" />
        {/* Right Image */}
        <img src={img} alt="right-img" className="Right-img" />
        <header className="App-header">
          {/* Center Content */}
          <div className="Center-content">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <code>
                <section>
                  <div className="content">
                    <h2>DYMN PREMIER LEAGUE</h2>
                    <h2>DYMN PREMIER LEAGUE</h2>
                  </div>
                </section>
              </code>
            </p>
            <a
              className="App-link"
              href="https://www.bcci.tv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Welcome to the world of cricket
            </a>
          </div>
          {/* Navigation Links */}
          <nav>
            <Link to="https://www.iplt20.com/">Home</Link>
            <li><Link to="/RegistrationForm">Registration Form</Link></li>
            <div><Link to="/dude">dude</Link></div>
            <div><Link to="/x">x</Link></div>
          </nav>
        </header>

        {/* Route Components for Dynamic Content */}
        <Routes> {/* Use Routes instead of Switch */}
          
         
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
        </Routes>
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/dude" element={<dude/>} />          
        </Routes>
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/x" element={<x/>} />         
        </Routes>
        
      </div>
   
  );
}

export default App;
