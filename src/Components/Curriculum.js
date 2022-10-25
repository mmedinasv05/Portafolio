
import "./CSS/Curriculum.css";
import '../Components/CSS/CustomeProperties.css';
import CV from './Assets/Curriculum.pdf'
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Curriculum() {

  const linkCV = useRef()

  const handleDownload = (e) => {

    linkCV.current.classList.add("link-curriculum-active");

    setTimeout(() => {
      linkCV.current.classList.remove("link-curriculum-active");
    }, 4000)
  }

  return (
    <a href={CV} download='Curriculum Manuel Chavez' onClick={handleDownload} ref={linkCV} className="link-curriculum" title="Descargar Curriculum">
      <FontAwesomeIcon icon={faCheck} className='icon-check' />
      <p className="text-button">
        Curriculum
      </p>
    </a >
  );
}
