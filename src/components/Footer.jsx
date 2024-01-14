import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="top flex">
            <div className="links">
              <h2>Links</h2>
              <ul>
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

            <div className="Socials">
              <h2>Socaial Links</h2>
              <ul>
                <li>
                  <a href="">linkedin</a>
                </li>
                <li>
                  <a href="">Facebook</a>
                </li>
                <li>
                  <a href="">GitHub</a>
                </li>
                <li>
                  <a href="">Youtube</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
