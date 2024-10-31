import "../Components/CSS/CustomeProperties.css";
import "../Components/CSS/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Paragraph from "./Paragraph";

const DATA = [
  {
    id: 1,
    icon: faInstagram,
    url: "https://www.instagram.com/__manuelchavez/",
    title: "Instagram",
    styles: "instagram",
  },
  {
    id: 2,
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/manuel-humberto-chavez/",
    title: "Linkedin",
    styles: "linkedin",
  },
  {
    id: 3,
    icon: faGithub,
    url: "https://github.com/mmedinasv05",
    title: "Github",
    styles: "github",
  },
];

function Footer() {
  return (
    <footer className="footer__container container__section">
      <Paragraph content="2024 Manuel Chavez, Rights Reserved." />
      <nav className="footer__icons">
        {DATA.map((icon) => {
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
