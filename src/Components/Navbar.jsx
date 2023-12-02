import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/components.css'

const Navbar = () => {
  return (
    <nav>
      <div className="left-section">
        <h2>DH Odonto</h2>
      </div>
      <div className="right-section">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/favs">Favs</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;