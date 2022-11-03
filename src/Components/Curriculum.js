
import "./CSS/Curriculum.css";
import '../Components/CSS/CustomeProperties.css';
import CV from './Assets/Curriculum.pdf'

export default function Curriculum() {
  return (
    <a href={CV} download="Resumen Manuel Chavez" className="menu-links" target="_blank" rel="noopener noreferrer">Resumen</a>
  );
}
