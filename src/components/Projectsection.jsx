import React from "react";
import projectpic from "../assets/a.png";

function Projectsection() {
  return (
    <div>
      <div id="projects" className="projects container">
        <h2 className="title">
          <span>My Recent Work</span>
        </h2>

        <div className="grid project-container">
          <div className="project-card">
            <div className="top">
              <img src="src\assets\a.png" alt="portfolio" />
            </div>
            <div className="bottom container">
              <h3>Personal Portfolio</h3>
              <p>Techstack: HTML, CSS, JS</p>
              <div>
                <a href="">
                  <div className="fa-brands fa-github"></div>
                </a>
                <a href="">
                  <div className="fa-brands fa-chrome"></div>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="top">
              <img src={projectpic} alt="portfolio" />
            </div>
            <div className="bottom container">
              <h3>Personal Portfolio</h3>
              <p>Techstack: HTML, CSS, JS</p>
              <div>
                <a href="">
                  <div className="fa-brands fa-github"></div>
                </a>
                <a href="">
                  <div className="fa-brands fa-chrome"></div>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="top">
              <img src={projectpic} alt="portfolio" />
            </div>
            <div className="bottom container">
              <h3>Personal Portfolio</h3>
              <p>Techstack: HTML, CSS, JS</p>
              <div>
                <a href="">
                  <div className="fa-brands fa-github"></div>
                </a>
                <a href="">
                  <div className="fa-brands fa-chrome"></div>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="top">
              <img src={projectpic} alt="portfolio" />
            </div>
            <div className="bottom container">
              <h3>Personal Portfolio</h3>
              <p>Techstack: HTML, CSS, JS</p>
              <div>
                <a href="">
                  <div className="fa-brands fa-github"></div>
                </a>
                <a href="">
                  <div className="fa-brands fa-chrome"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectsection;
