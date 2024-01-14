import React from "react";

function Skillssection() {
  return (
    <div>
      <section id="skills" className="skills">
        <h2 className="title">
          <span>Skills</span>
        </h2>
        <div className="container flex skills-container">
          <div>
            <div className="fa-brands fa-html5"></div>
            <span>HTML</span>
          </div>

          <div>
            <div className="fa-brands fa-css3-alt"></div>
            <span>CSS</span>
          </div>

          <div>
            <div className="fa-brands fa-github"></div>
            <span>Github</span>
          </div>

          <div>
            <div className="fa-brands fa-figma"></div>
            <span>Figma</span>
          </div>

          <div>
            <div className="fa-brands fa-js"></div>
            <span>JavaScript</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skillssection;
