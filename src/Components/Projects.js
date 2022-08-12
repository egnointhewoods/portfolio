import Fade from "react-reveal/Fade";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import OtherProjects from "./OtherProjects";
import Contact from "./Contact";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export default function Projects() {
  const { language } = useContext(LanguageContext);

  if (language === "English") {
    return (
      <div className="section projectsWrapper" id="projects">
        <Fade down>
          <div className="section-header">
            <h2 className="about-heading">Some Things I’ve Built</h2>
          </div>
        </Fade>
        <div className="projects">
          <Fade left>
            <a
              href="https://egnate-landing.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="imageDivRightAnchor"
            >
              <div className="projectImg" id="getWellyImg" />
            </a>
          </Fade>

          <Fade right>
            <div className="projectDescription projectDescriptionRight">
              <div className="headingWrapper">
                <h1 className="x-small-heading smallHeadingProject">
                  Featured Project
                </h1>
                <h3 className="big-heading bigHeadingProjects">
                  GetWelly.com Clone
                </h3>
              </div>
              <p className="descriptionParagraph">
                This project is a product landing page (Based on GetWelly
                website design). Users can see some of the best selling products
                on the homepage and they can also add items to the cart.
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
            <Fade left>
              <div className="projectDescription projectDescriptionLeft">
                <div>
                  <h1 className="x-small-heading smallHeadingProject">
                    Featured Project
                  </h1>
                  <h3 className="big-heading bigHeadingProjects">
                    Movie Website
                  </h3>
                </div>
                <p className="descriptionParagraph-left">
                  Users can see some trending and upcoming movies on the home
                  page of this website. They can also search for some of their
                  favourite TV Shows, Actors and Movies by typing the keywords
                  in the search field and get some details about it.
                </p>
                <div className="technologyListWrapper-left">
                  <span className="technology technologyLeft">React</span>
                  <span className="technology technologyLeft">Bootstrap</span>
                  <span className="technology technologyLeft">API</span>
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
            </Fade>
            <Fade right>
              <a
                href="https://egnatemovie.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="imageDivLeftAnchor"
              >
                <div className="projectImg projectImgLeft" id="movieAppImg" />
              </a>
            </Fade>
          </div>

          <div className="projects">
            <Fade left>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="imageDivRightAnchor"
              >
                <div className="projectImg" id="portfolioImg" />
              </a>
            </Fade>

            <Fade right>
              <div
                className="projectDescription projectDescriptionRight"
                id="portfolioProjectDescription"
              >
                <div className="headingWrapper">
                  <h1 className="x-small-heading smallHeadingProject">
                    Featured Project
                  </h1>
                  <h3 className="big-heading bigHeadingProjects">
                    Portfolio Page
                  </h3>
                </div>
                <p
                  className="descriptionParagraph"
                  id="portfolioDescriptionParagraph"
                >
                  Yup! The page that you are looking at. I used 'React Reveal'
                  for the animations that got the job done super quickly.
                </p>
                <div className="technologyListWrapper">
                  <span className="technology">React</span>
                  <span className="technology">CodeSandbox</span>
                  <span className="technology">Material UI</span>
                </div>
                <div className="linkWrapper">
                  <Tooltip title="GitHub Link" placement="left">
                    <a
                      href="https://github.com/egnointhewoods/portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <GitHubIcon className="icon" />
                    </a>
                  </Tooltip>
                  <Tooltip title="Hosted Website Link" placement="right">
                    <a href="/" target="_blank" rel="noreferrer">
                      <OpenInNewIcon className="icon" />
                    </a>
                  </Tooltip>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
        <OtherProjects />
        <Fade up>
          <Contact />
        </Fade>
      </div>
    );
  } else {
    return (
      <div className="section projectsWrapper" id="projects">
        <Fade down>
          <div className="section-header">
            <h2 className="about-heading">ჩემი პროექტები</h2>
          </div>
        </Fade>
        <div className="projects">
          <Fade left>
            <a
              href="https://egnate-landing.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="imageDivRightAnchor"
            >
              <div className="projectImg" id="getWellyImg" />
            </a>
          </Fade>

          <Fade right>
            <div className="projectDescription projectDescriptionRight">
              <div className="headingWrapper">
                <h1 className="x-small-heading smallHeadingProject">
                  გამორჩეული პროექტი
                </h1>
                <h3 className="big-heading bigHeadingProjects">
                  GetWelly.com კლონი
                </h3>
              </div>
              <p className="descriptionParagraph">
                ეს პროექტი არის ონლაინ მაღაზიის ვებსაიტი, რომელიც
                GetWelly.com'ის დიზაინის მიხედვით ავაწყე. მომხმარებლებს შეუძლიათ
                ნახონ ონლაინ მაღაზიის პროდუქტები, გაეცნონ მათ დეტალებს და
                დაამატონ ისინი კალათაში.
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
            <Fade left>
              <div className="projectDescription projectDescriptionLeft">
                <div>
                  <h1 className="x-small-heading smallHeadingProject">
                    გამორჩეული პროექტი
                  </h1>
                  <h3 className="big-heading bigHeadingProjects">
                    ფილმების ვებსაიტი
                  </h3>
                </div>
                <p className="descriptionParagraph-left">
                  ამ ვებსაიტზე მომხმარებლებს შეუძლიათ ნახონ ტრენდული და ჯერ
                  კიდევ არ გამოსული ფილმებისა და სერიალების დეტალები: ქასთი,
                  აღწერა, ა.შ. მათ ასევე შეუძლიათ ძიების ველში მოიძიონ ფილმები,
                  სერიალები და მსახიობები.
                </p>
                <div className="technologyListWrapper-left">
                  <span className="technology technologyLeft">React</span>
                  <span className="technology technologyLeft">Bootstrap</span>
                  <span className="technology technologyLeft">API</span>
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
            </Fade>
            <Fade right>
              <a
                href="https://egnatemovie.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="imageDivLeftAnchor"
              >
                <div className="projectImg projectImgLeft" id="movieAppImg" />
              </a>
            </Fade>
          </div>

          <div className="projects">
            <Fade left>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="imageDivRightAnchor"
              >
                <div className="projectImg" id="portfolioImg" />
              </a>
            </Fade>

            <Fade right>
              <div
                className="projectDescription projectDescriptionRight"
                id="portfolioProjectDescription"
              >
                <div className="headingWrapper">
                  <h1 className="x-small-heading smallHeadingProject">
                    გამორჩეული პროექტი
                  </h1>
                  <h3 className="big-heading bigHeadingProjects">
                    პორტფოლიოს ვებსაიტი
                  </h3>
                </div>
                <p
                  className="descriptionParagraph"
                  id="portfolioDescriptionParagraph"
                >
                  დიახ ეს ის ვებსაიტია რომელსაც ამწამს უყურებთ! ანიმაციებისთვის
                  გამოვიყენე "React-Reveal" ბიბლიოთეკა.
                </p>
                <div className="technologyListWrapper">
                  <span className="technology">React</span>
                  <span className="technology">CodeSandbox</span>
                  <span className="technology">Material UI</span>
                </div>
                <div className="linkWrapper">
                  <Tooltip title="GitHub Link" placement="left">
                    <a
                      href="https://github.com/egnointhewoods/portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <GitHubIcon className="icon" />
                    </a>
                  </Tooltip>
                  <Tooltip title="Hosted Website Link" placement="right">
                    <a href="/" target="_blank" rel="noreferrer">
                      <OpenInNewIcon className="icon" />
                    </a>
                  </Tooltip>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
        <OtherProjects />
        <Fade up>
          <Contact />
        </Fade>
      </div>
    );
  }
}
