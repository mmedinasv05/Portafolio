import React from 'react';
import '../Components/CSS/Footer.css';
import '../Components/CSS/CustomeProperties.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons';

const footerSocialMedia = [
  {
    icon: faInstagram,
    url: "https://www.instagram.com/__manuelchavez/",
    title: "Instagram",
    styles: "instagram"
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/___manuelchavez",
    title: "Twitter",
    styles: "twitter"
  },
  {
    icon: faCodepen,
    url: "https://codepen.io/mmedinasv/pens/public",
    title: "Codepen",
    styles: "codepen"
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/manuel-chavez-ab0b711ab/",
    title: "Linkedin",
    styles: "linkedin"
  },
  {
    icon: faGithub,
    url: "https://github.com/mmedinasv05",
    title: "Github",
    styles: "github"
  }
]

export default function Footer() {
  return (
    <footer className="footer-section">
      <p className="footer-copyright">2023 Manuel Chavez, Rights Reserved.</p>
      <section className="footer-social-media">
        {footerSocialMedia.map((icon, index) => {
          return <a key={index} href={icon.url} target="_blank" rel="noreferrer" title={icon.title}>
            <FontAwesomeIcon icon={icon.icon} className={icon.styles} />
          </a>
        })}
      </section>
    </footer>
  )
}