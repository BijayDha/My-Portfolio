import React from "react";

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
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Skills</a>
                </li>
                <li>
                  <a href="">Projects</a>
                </li>
                <li>
                  <a href="">Contacts</a>
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
