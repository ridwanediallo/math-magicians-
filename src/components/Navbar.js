import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => (
  <nav className="nav">
    <h1 className="logo">Math Magicians</h1>
    <ul className="nav-links">
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/calculator" className="link">
          Calculator
        </Link>
      </li>
      <li>
        <Link to="/quote" className="link">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
