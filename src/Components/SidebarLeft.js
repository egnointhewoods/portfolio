import "../Component-Styles/sidebar.scss";
import "../Component-Styles/fade-animation.scss";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";

export default function SidebarLeft() {
  return (
    <div className="sideBar sideBarLeft sidebarLeftFadeIn">
      <Tooltip title="GitHub" placement="right">
        <a
          className="iconAnchor"
          href="https://github.com/egnointhewoods"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className="icons" fontSize="medium" />{" "}
        </a>
      </Tooltip>

      <br />
      <br />
      <Tooltip title="LinkedIn" placement="right">
        <a
          className="iconAnchor"
          href="https://www.linkedin.com/in/egnate-noniashvili-178350238/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className="icons" fontSize="medium" />{" "}
        </a>
      </Tooltip>
      <br />
      <br />
      <Tooltip title="Mail" placement="right">
        <a
          className="iconAnchor"
          href="mailto:egnatenoniashvili6@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <MailIcon className="icons" fontSize="medium" />{" "}
        </a>
      </Tooltip>
      <br />
      <br />
      <Tooltip title="Instagram" placement="right">
        <a
          className="iconAnchor"
          href="https://www.instagram.com/egnointhewoods/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon className="icons" fontSize="medium" />{" "}
        </a>
      </Tooltip>
      <div class="vl"></div>
    </div>
  );
}
