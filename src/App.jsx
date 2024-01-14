import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Herosection from "./components/herosection";
import Banner from "./components/banner";
import Skillssection from "./components/Skillssection";
import Projectsection from "./components/Projectsection";
import Aboutme from "./components/Aboutme";
import Getintouch from "./components/Getintouch";
import Footer from "./components/Footer";
import Movetoup from "./components/Movetoup";

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
          <Navbar></Navbar>

          {/* <!-- hero section  --> */}
          <Herosection></Herosection>
          {/* <!-- banner  --> */}

          <Banner></Banner>

          {/* <!-- skills section --> */}

          <Skillssection></Skillssection>

          {/* <!-- Projects section --> */}

          <Projectsection></Projectsection>

          {/* <!-- About Me section --> */}

          <Aboutme></Aboutme>

          {/* <!-- Get in touch section --> */}

          <Getintouch></Getintouch>

          {/* <!-- Footer section --> */}

          <Footer></Footer>

          <Movetoup />
        </div>
      </div>
    </>
  );
}

export default App;
