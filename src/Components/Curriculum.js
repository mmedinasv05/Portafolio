import "./CSS/Curriculum.css";
import "../Components/CSS/CustomeProperties.css";
import CV from "./Assets/Curriculum-Manuel-Chavez.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Curriculum() {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".link__cv")) {
      e.target.textContent = "Descargando...";

      setTimeout(() => {
        e.target.style.display = "none";
        document
          .querySelector(".curriculum__message")
          .classList.remove("hidden__message");
      }, 1500);
    }
  });

  return (
    <a
      href={CV}
      className="link__cv"
      download="Curriculum Manuel Chavez"
      title="Descargar Curriculum"
    >
      Curriculum
      <span className="link__icon__section">
        <FontAwesomeIcon icon={faDownload} className="link__icon" />
      </span>
    </a>
  );
}
