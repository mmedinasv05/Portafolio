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
      download="Curriculum Manuel Chavez"
      title="Descargar curriculum"
    >
      <span className="text-cv">Curriculum</span>
      <span className="icon-cv">
        <FontAwesomeIcon icon={faDownload} />
      </span>
    </a>
  );
}

export default Curriculum;
