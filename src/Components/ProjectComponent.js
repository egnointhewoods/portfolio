import Fade from "react-reveal/Fade";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";

export default function ProjectComponent({
  descPlacement,
  title,
  imageId,
  hostedLink,
  description,
  technology,
  githubLink
}) {
  if (descPlacement === "Left") {
    return (
      <div className="projects">
        <Fade left>
          <a
            href={hostedLink}
            target="_blank"
            rel="noreferrer"
            className="imageDivRightAnchor"
          >
            <div className="projectImg" id={imageId} />
          </a>
        </Fade>

        <Fade right>
          <div className="projectDescription projectDescriptionRight">
            <div className="headingWrapper">
              <h1 className="x-small-heading smallHeadingProject">
                Featured Project
              </h1>
              <h3 className="big-heading bigHeadingProjects">{title}</h3>
            </div>
            <p className="descriptionParagraph">{description}</p>
            <div className="technologyListWrapper">
              {technology.map((technology) => {
                return <span className="technology">{technology}</span>;
              })}
            </div>
            <div className="linkWrapper">
              <Tooltip title="GitHub Link" placement="left">
                <a href={githubLink} target="_blank" rel="noreferrer">
                  {" "}
                  <GitHubIcon className="icon" />
                </a>
              </Tooltip>
              <Tooltip title="Hosted Website Link" placement="right">
                <a href={hostedLink} target="_blank" rel="noreferrer">
                  <OpenInNewIcon className="icon" />
                </a>
              </Tooltip>
            </div>
          </div>
        </Fade>
      </div>
    );
  } else {
    return (
      <div className="projects">
        <Fade left>
          <div className="projectDescription projectDescriptionLeft">
            <div>
              <h1 className="x-small-heading smallHeadingProject">
                Featured Project
              </h1>
              <h3 className="big-heading bigHeadingProjects">{title}</h3>
            </div>
            <p className="descriptionParagraph-left">{description}</p>
            <div className="technologyListWrapper-left">
              {technology.map((technology) => {
                return <span className="technology">{technology}</span>;
              })}
            </div>
            <div className="linkWrapper-left">
              <Tooltip title="Hosted Website Link" placement="right">
                <a href={hostedLink} target="_blank" rel="noreferrer">
                  <OpenInNewIcon className="icon icon-left" />
                </a>
              </Tooltip>
              {githubLink ? (
                <Tooltip title="GitHub Link" placement="left">
                  <a href={githubLink} target="_blank" rel="noreferrer">
                    {" "}
                    <GitHubIcon className="icon" />
                  </a>
                </Tooltip>
              ) : (
                ""
              )}
            </div>
          </div>
        </Fade>
        <Fade right>
          <a
            href={hostedLink}
            target="_blank"
            rel="noreferrer"
            className="imageDivLeftAnchor"
          >
            <div className="projectImg projectImgLeft" id={imageId} />
          </a>
        </Fade>
      </div>
    );
  }
}
