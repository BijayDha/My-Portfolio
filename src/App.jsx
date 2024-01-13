import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        {/* <!-- dark mode toggler  --> */}

        <input type="checkbox" id="darkMode" />

        <div className="wrapper">
          <label for="darkMode" className="dark-mode-toggle">
            <div className="fa-solid fa-circle-half-stroke"></div>
          </label>
          {/* <!-- navbar  --> */}
          <header>
            <div className="flex header container">
              <div className="flex logo">
                <div>
                  <a href="#home">Bijay</a>
                </div>
                <div className="line">Soft. Engineer</div>
              </div>

              <label for="hamburgerMenu">
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

          {/* <!-- hero section  --> */}
          <section id="home" className="hero-section container">
            <div className="grid hero">
              <div className="left flex">
                <div>
                  Hi i'm <span>Bijay Dhakal</span>
                </div>
                <div className="tag">Soft. Engineer</div>
                <p>I love coding and teach others what i know</p>

                <div>
                  <button>
                    Download CV <div className="fa-solid fa-download"></div>
                  </button>
                </div>
              </div>
              <div className="right flex my-img">
                <img src="./assets/my.png" alt="my photo" />
              </div>
            </div>
          </section>
          {/* <!-- banner  --> */}

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

          {/* <!-- skills section --> */}

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

          {/* <!-- Projects section --> */}

          <div id="projects" className="projects container">
            <h2 className="title">
              <span>My Recent Work</span>
            </h2>

            <div className="grid project-container">
              <div className="project-card">
                <div className="top">
                  <img src="./assets/a.png" alt="portfolio" />
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
                  <img src="./assets/a.png" alt="portfolio" />
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
                  <img src="./assets/a.png" alt="portfolio" />
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
                  <img src="./assets/a.png" alt="portfolio" />
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

          {/* <!-- About Me section --> */}

          <section id="about" className="about">
            <h2 className="title">
              <span>About Me</span>
            </h2>

            <div className="container flex about-content">
              <div className="my-img flex">
                <img src="./assets/my.png" alt="Bijay" />
              </div>
              <div className="my-bio">
                <h2>Bijay Dhakal</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima alias, atque doloribus id commodi delectus dolorum
                  voluptatum, reprehenderit fuga ducimus fugiat nemo consectetur
                  officia dolor ipsam inventore, repellat aliquam magnam.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  fugit provident libero autem adipisci veritatis eos excepturi
                  quod architecto, illum ea! Iusto, repellendus mollitia!
                  Distinctio perspiciatis non nobis incidunt pariatur?
                </p>

                <p>Sydney, Australia</p>
                <div>
                  <div className="tag">Interest</div>
                  <div className="flex">
                    <span> Coding </span>
                    <span> Football </span>
                    <span> Movies </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Get in touch section --> */}

          <section id="contact" className="container contact">
            <h2 className="title">
              <span>Contact</span>
            </h2>

            <div className="social flex">
              <a href="linked in " target="_blank">
                <div className="fa-brands fa-linkedin"></div>
              </a>
              <a href="" target="_blank">
                <div className="fa-brands fa-youtube"></div>
              </a>
              <a href="" target="_blank">
                <div className="fa-brands fa-facebook"></div>
              </a>
              <a href="tel:0452087872">
                <div className="fa-solid fa-phone"></div>
              </a>
            </div>
            <h3>OR</h3>
            <a href="mailto:bijay.dhakal2054@gmail.com">
              <div className="email-section flex">
                <div className="email flex">
                  <span>bijay.dhakal2054@gmail.com</span>
                  <div className="send flex">
                    <div className="fa-solid fa-paper-plane"></div>
                  </div>
                </div>
              </div>
            </a>
          </section>

          {/* <!-- Footer section --> */}

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
          <div className="footer-bottom">
            &copy; All right reserved. Made by me with 🚀
          </div>

          <a href="#home">
            <div className="go-up flex">
              <div className="fa-solid fa-angle-up"></div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
