import Fade from "react-reveal/Fade";
import "../Component-Styles/otherProjects.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export default function OtherProjects() {
  const { language } = useContext(LanguageContext);
  if (language === "English") {
    return (
      <div className="otherProjects">
        <Fade left>
          <h1 className="big-heading bigHeadingProjects bigHeadingOtherProjects">
            Other Noteworthy Projects
          </h1>
        </Fade>

        <div className="otherProjectsWrapper">
          <Fade up>
            <a
              href="https://tbc-test.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="otherProject"
              id="libraryProject"
            >
              <div className="links" id="otherProjectLinks">
                <Tooltip title="Hosted Website Link" placement="left">
                  <OpenInNewIcon className="otherProjectIcon" />
                </Tooltip>
                <Tooltip title="GitHub Link" placement="left">
                  <a
                    href="https://github.com/egnointhewoods/tbc-test"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <GitHubIcon className="icon" />
                  </a>
                </Tooltip>
              </div>
              <h2 className="big-heading otherProjectHeading">Freud Library</h2>
              <div className="otherProjectDescription">
                <p className="otherProjectParagraph">
                  {" "}
                  Users can search for the Sigmund Freud's books by typing the
                  keywords in the search field and preview them.
                </p>
              </div>
              <div className="otherProjectTechnologies">
                <p className="outherProjectTechnology">React</p>
                <p className="outherProjectTechnology">Bootstrap</p>
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
              <h2 className="big-heading otherProjectHeading">
                Quote Generator
              </h2>
              <div className="otherProjectDescription">
                <p className="otherProjectParagraph">
                  {" "}
                  As you can tell by the title, this app generates a random
                  quote once the button is clicked.
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
                  Just a simple stopwatch app that I built in the early stages
                  of my career.
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
  } else {
    return (
      <div className="otherProjects">
        <Fade left>
          <h1 className="big-heading bigHeadingProjects bigHeadingOtherProjects">
            სხვა პროექტები
          </h1>
        </Fade>

        <div className="otherProjectsWrapper">
          <Fade up>
            <a
              href="https://tbc-test.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="otherProject"
              id="libraryProject"
            >
              <div className="links" id="otherProjectLinks">
                <Tooltip title="Hosted Website Link" placement="left">
                  <OpenInNewIcon className="otherProjectIcon" />
                </Tooltip>
                <Tooltip title="GitHub Link" placement="left">
                  <a
                    href="https://github.com/egnointhewoods/tbc-test"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <GitHubIcon className="icon" />
                  </a>
                </Tooltip>
              </div>
              <h2 className="big-heading otherProjectHeading">ბიბლიოთეკა</h2>
              <div className="otherProjectDescription">
                <p className="otherProjectParagraph">
                  {" "}
                  მომხმარებლებს შეუძლიათ დასერჩონ ზიგმუნდ ფროიდის წიგნები,
                  ძიების ველის დახმარებით ჩაწერენ და გაეცნონ წიგნის დეტალებს.
                </p>
              </div>
              <div className="otherProjectTechnologies">
                <p className="outherProjectTechnology">React</p>
                <p className="outherProjectTechnology">Bootstrap</p>
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
              <h2 className="big-heading otherProjectHeading">ციტატები</h2>
              <div className="otherProjectDescription">
                <p className="otherProjectParagraph">
                  {" "}
                  ეს აპლიკაცია ეკრანზე ამოგიგდებთ შემთხვევით ციტატას მას შემდეგ
                  რაც ღილაკს დააწვებით.
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
              <h2 className="big-heading otherProjectHeading">წამზომი</h2>
              <div className="otherProjectDescription">
                <p className="otherProjectParagraph">
                  ეს ვანილა ჯავასკრიპტით შექმნილი წამზომის აპლიკაცია რაც ჩემი
                  კარიერის ადრეულ ეტაპზე შევქმენი.
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
}
