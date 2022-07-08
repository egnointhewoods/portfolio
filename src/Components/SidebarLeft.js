import "../Component-Styles/sidebar.scss";
import "../Component-Styles/fade-animation.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";

export default function SidebarLeft() {
  return (
    <div className="sideBar sideBarLeft sidebarLeftFadeIn">
      <GitHubIcon className="icons" fontSize="medium" />
      <br />
      <br />
      <LinkedInIcon className="icons" fontSize="medium" />
      <br />
      <br />
      <MailIcon className="icons" fontSize="medium" />
      <br />
      <br />
      <InstagramIcon className="icons" fontSize="medium" />
      <div class="vl"></div>
    </div>
  );
}
