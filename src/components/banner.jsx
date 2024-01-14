import React from "react";

function Banner() {
  return (
    <div>
      <section id="skills" className="flex banner container">
        <div className="info-content flex">
          <div className="icon-container flex">
            <div className="fa-solid fa-award"></div>
          </div>
          <div>
            <span>IT</span>
            <p>Graduated</p>
          </div>
        </div>

        <div className="info-divider"></div>

        <div className="info-content flex">
          <div className="icon-container flex">
            <div className="fa-solid fa-award"></div>
          </div>
          <div>
            <span>5+ Projects</span>
            <p>Completed</p>
          </div>
        </div>
        <div className="info-divider"></div>

        <div className="info-content flex">
          <div className="icon-container flex">
            <div className="fa-solid fa-award"></div>
          </div>
          <div>
            <span>1 Year</span>
            <p>Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
