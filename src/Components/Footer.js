import React from "react";
import "../Components/CSS/Footer.css";
import "../Components/CSS/CustomeProperties.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const footerSocialMedia = [
  {
    icon: faInstagram,
    url: "https://www.instagram.com/__manuelchavez/",
    title: "Instagram",
    styles: "instagram",
  },
  {
    icon: faCodepen,
    url: "https://codepen.io/mmedinasv/pens/public",
    title: "Codepen",
    styles: "codepen",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/manuel-humberto-chavez/",
    title: "Linkedin",
    styles: "linkedin",
  },
  {
    icon: faGithub,
    url: "https://github.com/mmedinasv05",
    title: "Github",
    styles: "github",
  },
];

function Footer() {
  return (
    <footer className="footer-container">
      <p className="paragraph">2024 Manuel Chavez, Rights Reserved.</p>
      <section className="footer-icons">
        {footerSocialMedia.map((icon, index) => {
          return (
            <a
              key={index}
              href={icon.url}
              target="_blank"
              rel="noreferrer"
              title={icon.title}
            >
              <FontAwesomeIcon icon={icon.icon} className={icon.styles} />
            </a>
          );
        })}
      </section>
    </footer>
  );
}

export default Footer;
