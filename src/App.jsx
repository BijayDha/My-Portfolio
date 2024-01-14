import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Herosection from "./components/herosection";
import Banner from "./components/banner";
import Skillssection from "./components/Skillssection";
import Projectsection from "./components/Projectsection";
import Aboutme from "./components/Aboutme";
import Getintouch from "./components/Getintouch";
import Footer from "./components/Footer";
import Movetoup from "./components/Movetoup";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/homepage";
import Skill from "./Pages/Skill";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <div>
        {/* <!-- dark mode toggler  --> */}

        <input type="checkbox" id="darkMode" />

        <div className="wrapper">
          <label htmlFor="darkMode" className="dark-mode-toggle">
            <div className="fa-solid fa-circle-half-stroke"></div>
          </label>
          {/* <!-- navbar  --> */}
          Page
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/skills" element={<Skill />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
          {/* <!-- Footer section --> */}
          <Movetoup />
        </div>
      </div>
    </>
  );
}

export default App;
