import "../Components/CSS/Footer.css";
import Paragraph from "./Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMedia } from "./Assets/data";

function Footer() {
  return (
    <footer className="footer__container container__section">
      <Paragraph content="2024 Manuel Chavez, Rights Reserved." />
      <nav className="footer__icons">
        {socialMedia.map((icon) => {
          return (
            <a
              className="icons__link"
              key={icon.id}
              href={icon.url}
              target="_blank"
              rel="noreferrer"
              title={icon.title}
            >
              <FontAwesomeIcon icon={icon.icon} className={icon.styles} />
            </a>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
