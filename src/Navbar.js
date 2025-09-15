import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
    <header>
      <nav class="navbar">
        <div class="navdiv">
          <span><b>SKY MILES</b></span>

          <ul>
            <li><a href="pages/home.html">Home</a></li>
            <li><a href="pages/signup.html">SignUp</a></li>
          </ul>
        </div>
      </nav>
    </header>
    );
}

export default Navbar;