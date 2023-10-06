import "./CSS/Curriculum.css";
import "../Components/CSS/CustomeProperties.css";
import CV from "./Assets/Curriculum.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Curriculum() {
  return (
    <a
      href={CV}
      id="link-cv"
      className="link-cv"
      download="Resume Manuel Chavez"
      title="Download Resume"
    >
      <span className="text-cv">Resume</span>
      <span className="icon-cv">
        <FontAwesomeIcon icon={faDownload} />
      </span>
    </a>
  );
}

export default Curriculum;
