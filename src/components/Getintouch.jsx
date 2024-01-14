import React from "react";

function Getintouch() {
  return (
    <div>
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
    </div>
  );
}

export default Getintouch;
