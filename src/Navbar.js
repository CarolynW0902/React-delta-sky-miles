import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
    <header>
      <nav className="navbar">
        <div className="navdiv">
          <span><b>SKY MILES</b></span>

          <ul className="nav-links">
            <li><NavLink to="/login" className={ ({ isActive }) => (isActive ? "active" : undefined) } end >Home</NavLink></li>
            <li><NavLink to="/signup" className={ ({ isActive }) => (isActive ? "active" : undefined) }>SignUp</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
    );
}

export default Navbar;