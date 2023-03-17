
import "./CSS/Curriculum.css";
import '../Components/CSS/CustomeProperties.css';
import CV from './Assets/Curriculum.pdf'

export default function Curriculum() {
  return (
    <a href={CV} download="Resumen Manuel Chavez" class="buttonDownload" target="_blank" rel="noopener noreferrer">
      Download Resume
    </a>
  );
}
