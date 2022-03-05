import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../styles/All.css'
import '../styles/Navbar.css';

//currently Navbar is not being used for testing purposes
function Navbar() {
    return (
        <nav className="nav">
          <h1>Shawn A. Analla</h1>
            <ul className="nav-links">
              <li><a href="/about">About Me</a></li>
              <li><a href="/work">Portfolio</a></li>
              <li><a href="/contactus">Contact</a></li>
              <li><a href="/resume">Resume</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

