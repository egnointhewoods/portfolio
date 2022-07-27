import Fade from "react-reveal/Fade";
import "../Component-Styles/otherProjects.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Tooltip from "@mui/material/Tooltip";

export default function OtherProjects() {
  return (
    <div className="otherProjects">
      <Fade left>
        <h1 className="big-heading bigHeadingProjects">
          Other Noteworthy Projects
        </h1>
      </Fade>

      <div className="otherProjectsWrapper">
        <Fade up>
          <a
            href="https://egnatelibrary.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="otherProject"
            id="libraryProject"
          >
            <div className="links">
              <Tooltip title="Hosted Website Link" placement="left">
                <OpenInNewIcon className="otherProjectIcon" />
              </Tooltip>
            </div>
            <h2 className="big-heading otherProjectHeading">Library Website</h2>
            <div className="otherProjectDescription">
              <p className="otherProjectParagraph">
                {" "}
                This project utilizes a google books API. Users can search for
                the books that they want by typing the keywords in the field.
              </p>
            </div>
            <div className="otherProjectTechnologies">
              <p className="outherProjectTechnology">JavaScript</p>
              <p className="outherProjectTechnology">Bootstrap</p>
              <p className="outherProjectTechnology">API</p>
            </div>
          </a>
        </Fade>
        <Fade up>
          <a
            href="https://codepen.io/countryside-egnate/pen/NWXdQXV"
            target="_blank"
            rel="noreferrer"
            className="otherProject"
            id="quoteProject"
          >
            <div className="links">
              <Tooltip title="Hosted Website Link" placement="left">
                <OpenInNewIcon className="otherProjectIcon" />
              </Tooltip>
            </div>
            <h2 className="big-heading otherProjectHeading">Quote Generator</h2>
            <div className="otherProjectDescription">
              <p className="otherProjectParagraph">
                {" "}
                As you can tell by the title, this app generates a random quote
                once the button is clicked.
              </p>
            </div>
            <div className="otherProjectTechnologies">
              <p className="outherProjectTechnology">HTML</p>
              <p className="outherProjectTechnology">CSS</p>
              <p className="outherProjectTechnology">JavaScript</p>
            </div>
          </a>
        </Fade>
        <Fade up>
          <a
            href="https://egnatestopwatch.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="otherProject"
            id="stopwatchProject"
          >
            <div className="links">
              <Tooltip title="Hosted Website Link" placement="left">
                <OpenInNewIcon className="otherProjectIcon" />
              </Tooltip>
            </div>
            <h2 className="big-heading otherProjectHeading">Stopwatch</h2>
            <div className="otherProjectDescription">
              <p className="otherProjectParagraph">
                Just a simple stopwatch app that I built in the early stages of
                my career.
              </p>
            </div>
            <div className="otherProjectTechnologies">
              <p className="outherProjectTechnology">HTML</p>
              <p className="outherProjectTechnology">CSS</p>
              <p className="outherProjectTechnology">JavaScript</p>
            </div>
          </a>
        </Fade>
      </div>
    </div>
  );
}
