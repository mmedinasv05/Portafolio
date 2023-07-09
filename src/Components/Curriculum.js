
import "./CSS/Curriculum.css";
import '../Components/CSS/CustomeProperties.css';
import CV from './Assets/Curriculum.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSpinner } from "@fortawesome/free-solid-svg-icons";

function Curriculum() {
  document.addEventListener("click", (e) => {
    if (e.target.matches("#link-cv")) {
      e.target.classList.add("download-cv")
    }

    setTimeout(() => {
      e.target.classList.remove("download-cv")
    }, 1000)
  })


  return (
    // <a href={CV} download="Curriculum Manuel Chavez" title="Curriculum Manuel Chavez" className="buttonDownload animate__animated animate__zoomIn" target="_blank" rel="noopener noreferrer">
    //   Curriculum
    // </a>
    <a href={CV} id="link-cv" className="link-cv" download="Curriculum Manuel Chavez"><span className="text-cv">Curriculum <FontAwesomeIcon icon={faDownload} /> </span> <FontAwesomeIcon icon={faSpinner} className='icon-cv' /></a>
  );
}

export default Curriculum; 
