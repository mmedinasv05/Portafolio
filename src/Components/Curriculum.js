
import "./CSS/Curriculum.css";
import '../Components/CSS/CustomeProperties.css';
import CV from './Assets/Curriculum.pdf'

function Curriculum() {
  return (
    <a href={CV} download="Curriculum Manuel Chavez" title="Curriculum Manuel Chavez" class="buttonDownload" target="_blank" rel="noopener noreferrer">
      Curriculum
    </a>
  );
}

export default Curriculum; 
