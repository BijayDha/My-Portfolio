import React from "react";
import profilePicture from "../assets/my.png";
import resume from "../assets/Resume.pdf";

function Herosection() {
  return (
    <div>
      <section id="home" className="hero-section container">
        <div className="grid hero">
          <div className="left flex">
            <div>
              Hi i'm <span>Bijay Dhakal</span>
            </div>
            <div className="tag">Soft. Engineer</div>
            <p>I love coding and teach others what i know</p>

            <a
              href={resume}
              download={"Bijay-resume"}
              target="_blank"
              rel="noreferrer"
            >
              <button>
                Download CV <div className="fa-solid fa-download"></div>
              </button>
            </a>
          </div>
          <div className="right flex my-img">
            <img src={profilePicture} alt="my photo" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Herosection;
