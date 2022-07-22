import "../Component-Styles/about-projects-contact.css";

import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <Fade up>
      <div className="section about" id="about">
        <div className="section-header">
          <h2 className="about-number">01.</h2>
          <h2 className="about-heading">About Me</h2>
        </div>
        <div className="paragraphsWrapper">
          <div className="paragraphs">
            <Fade left>
              <p>
                I am a self-taught front-end web developer based in Tbilisi,
                Georgia. I've been developing Web Apps since 2021. I consider
                myself as a well-organised person, problem solver and an
                independent coder with high attention to detail.
              </p>
            </Fade>
            <Fade right>
              <p>
                I am a self-taught front-end web developer based in Tbilisi,
                Georgia. I've been developing Web Apps since 2021. I consider
                myself as a well-organised person, problem solver and an
                independent coder with high attention to detail.
              </p>
            </Fade>
            <Fade left>
              <p>
                I am a self-taught front-end web developer based in Tbilisi,
                Georgia. I've been developing Web Apps since 2021. I consider
                myself as a well-organised person, problem solver and an
                independent coder with high attention to detail.
              </p>
            </Fade>
          </div>
          <img
            src="https://www.upload.ee/image/14173732/About_photo.PNG"
            alt="profile"
            className="profile"
          />
        </div>
      </div>
    </Fade>
  );
}
