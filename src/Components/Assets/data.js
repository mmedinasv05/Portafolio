import project1 from "../Image/1-min.webp";
import project2 from "../Image/2-min.webp";
import project3 from "../Image/3-min.webp";
import project4 from "../Image/4-min.webp";
import project5 from "../Image/5-min.webp";
import project6 from "../Image/6-min.webp";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const SKILLS = [
  "HTML.",
  "CSS.",
  "Bootstrap.",
  "Javascript.",
  "React.",
  "Git & Github.",
];

export const projectList = [
  {
    id: 1,
    title: "Fun Weather",
    image: project1,
    alt: "Fun Weather",
    web: "https://mmedinasv05.github.io/Weather-App/",
    github: "https://github.com/mmedinasv05/Weather-App",
    tecnology: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 2,
    title: "Story HTML",
    image: project2,
    alt: "Story HTML",
    web: "https://mmedinasv05.github.io/Story-HTML/",
    github: "https://github.com/mmedinasv05/Story-HTML",
    tecnology: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 3,
    title: "Commerce",
    image: project3,
    alt: "Commerce",
    web: "https://mmedinasv05.github.io/Landing-Page-Ecommerce-App/",
    github: "https://github.com/mmedinasv05/Landing-Page-Ecommerce-App",
    tecnology: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 4,
    title: "Bitlab Academy",
    image: project4,
    alt: "Bitlab Academy",
    web: "https://mmedinasv05.github.io/Lading-Page-Bitlab/",
    github: "https://github.com/mmedinasv05/Lading-Page-Bitlab",
    tecnology: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 5,
    title: "Amazon Lite",
    image: project5,
    alt: "Amazon Lite",
    web: "https://mmedinasv05.github.io/Landing-page-Amazon/",
    github: "https://github.com/mmedinasv05/Landing-page-Amazon",
    tecnology: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 6,
    title: "Portafolio Web",
    image: project6,
    alt: "Portafolio",
    web: "https://mmedinasv05.github.io/Portafolio/",
    github: "https://github.com/mmedinasv05/Portafolio",
    tecnology: ["React", "Bootstrap"],
  },
];

export const socialMedia = [
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

export const dataMenu = [
  {
    path: "/",
    title: "Inicio",
  },
  {
    path: "/acerca",
    title: "Acerca",
  },
  {
    path: "/proyectos",
    title: "Proyectos",
  },
  {
    path: "/contacto",
    title: "Contacto",
  },
];
