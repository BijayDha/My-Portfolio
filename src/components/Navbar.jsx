import React from "react";

function Navbar() {
  return (
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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
