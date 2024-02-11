import "./CSS/Curriculum.css";
import "../Components/CSS/CustomeProperties.css";
import CV from "./Assets/Curriculum.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Curriculum() {
  return (
    <a
      href={CV}
      id="link-cv"
      className="link-cv"
      download="Resume Manuel Chavez"
      title="Descargar Curriculum"
    >
      <span className="text-cv">Curriculum</span>
      <span className="icon-cv">
        <FontAwesomeIcon icon={faDownload} />
      </span>
    </a>
  );
}
