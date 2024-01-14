import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <header>
          <div className="flex header container">
            <div className="flex logo">
              <div>
                <a href="#home">Bijay</a>
              </div>
              <div className="line">Soft. Engineer</div>
            </div>

            <label htmlFor="hamburgerMenu">
              <div className="fa-solid fa-bars"></div>
            </label>
            <input type="checkbox" name="" id="hamburgerMenu" />

            <div className="menu">
              <ul className="flex navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Skills">Skills</Link>
                </li>
                <li>
                  <Link to="/Projects">Projects</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
