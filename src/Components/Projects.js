import Fade from "react-reveal/Fade";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";

export default function Projects() {
  return (
    <div className="section projectsWrapper">
      <Fade down>
        <div className="section-header">
          <h2 className="about-number">02.</h2>
          <h2 className="about-heading">Some Things I’ve Built</h2>
        </div>
      </Fade>
      <div className="projects">
        <Fade left>
          <a
            href="https://egnate-landing.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.upload.ee/image/14231004/getwelly_copy.PNG"
              alt="GetWelly Clone"
              className="projectImg"
            />
          </a>
        </Fade>

        <Fade right>
          <div className="projectDescription projectDescriptionRight">
            <div className="headingWrapper">
              <h1 className="x-small-heading">Featured Project</h1>
              <h3 className="big-heading bigHeadingProjects">
                GetWelly.com Clone
              </h3>
            </div>
            <p className="descriptionParagraph">
              This project is a product landing page (Based on GetWelly website
              design). Users can see some of the best selling products on the
              homepage and they can also add items to the cart.
            </p>
            <div className="technologyListWrapper">
              <span className="technology">React</span>
              <span className="technology">CodeSandbox</span>
            </div>
            <div className="linkWrapper">
              <Tooltip title="GitHub Link" placement="left">
                <a
                  href="https://github.com/egnointhewoods/landing-page"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <GitHubIcon className="icon" />
                </a>
              </Tooltip>
              <Tooltip title="Hosted Website Link" placement="right">
                <a
                  href="https://egnate-landing.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <OpenInNewIcon className="icon" />
                </a>
              </Tooltip>
            </div>
          </div>
        </Fade>
      </div>
      <Fade up>
        <div className="projects">
          <div className="projectDescription projectDescriptionLeft">
            <div>
              <h1 className="x-small-heading">Featured Project</h1>
              <h3 className="big-heading bigHeadingProjects">Movie Website</h3>
            </div>
            <p className="descriptionParagraph-left">
              Users can see some trending and upcoming movies on the home page
              of this website. They can also search for some of their favourite
              TV Shows, Actors and Movies by typing the keywords in the search
              field and get some details about it.
            </p>
            <div className="technologyListWrapper-left">
              <span className="technology">React</span>
              <span className="technology">Bootstrap</span>
              <span className="technology">Visual Studio Code</span>
              <span className="technology">API</span>
            </div>
            <div className="linkWrapper-left">
              <Tooltip title="Hosted Website Link" placement="right">
                <a
                  href="https://egnatemovie.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <OpenInNewIcon className="icon icon-left" />
                </a>
              </Tooltip>
            </div>
          </div>
          <Fade right>
            <div className="imageDiv imageDivLeft">
              <a
                href="https://egnatemovie.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.upload.ee/image/14154129/movie_app_screenshot.PNG"
                  alt="Movie Website"
                  className="projectImg projectImgLeft"
                />
              </a>
            </div>
          </Fade>
        </div>

        <div className="projects">
          <Fade left>
            <a
              href="https://egnate-landing.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.upload.ee/image/14342819/egnatios_folio.PNG"
                alt="GetWelly Clone"
                className="projectImg"
              />
            </a>
          </Fade>

          <Fade right>
            <div className="projectDescription projectDescriptionRight">
              <div className="headingWrapper">
                <h1 className="x-small-heading">Featured Project</h1>
                <h3 className="big-heading bigHeadingProjects">
                  Portfolio Page
                </h3>
              </div>
              <p className="descriptionParagraph">
                Yup! The page that you are looking at. I used 'React Reveal' for
                the animations that got the job done super quickly.
              </p>
              <div className="technologyListWrapper">
                <span className="technology">React</span>
                <span className="technology">CodeSandbox</span>
              </div>
              <div className="linkWrapper">
                <Tooltip title="GitHub Link" placement="left">
                  <a
                    href="https://github.com/egnointhewoods/landing-page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <GitHubIcon className="icon" />
                  </a>
                </Tooltip>
                <Tooltip title="Hosted Website Link" placement="right">
                  <a
                    href="https://egnate-landing.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <OpenInNewIcon className="icon" />
                  </a>
                </Tooltip>
              </div>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
}
