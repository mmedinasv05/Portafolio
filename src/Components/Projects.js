import ProjectCard from "./ProjectCard";
import project1 from './Image/1-min.webp'
import project2 from './Image/2-min.webp'
import project3 from './Image/3-min.webp'
import project4 from './Image/4-min.webp'
import project5 from './Image/5-min.webp'
import project6 from './Image/6-min.webp'
import "../Components/CSS/Projects.css";
import "../Components/CSS/CustomeProperties.css";

const projectList = [
  {
    id: 1,
    title: "Fun Weather.",
    image: project1,
    alt: "Fun Weather",
    web: "https://mmedinasv05.github.io/Weather-App/",
    github: "https://github.com/mmedinasv05/Weather-App",
    tecnology: "HTML, CSS, Responsive Design"
  },
  {
    id: 2,
    title: "Story HTML.",
    image: project2,
    alt: "Story HTML",
    web: "https://mmedinasv05.github.io/Story-HTML/",
    github: "https://github.com/mmedinasv05/Story-HTML",
    tecnology: "HTML, CSS, Responsive Design"
  },
  {
    id: 3,
    title: "Commerce.",
    image: project3,
    alt: "Commerce",
    web: "https://mmedinasv05.github.io/Landing-Page-Ecommerce-App/",
    github: "https://github.com/mmedinasv05/Landing-Page-Ecommerce-App",
    tecnology: "HTML, CSS, Responsive Design"
  },
  {
    id: 4,
    title: "Bitlab Academy.",
    image: project4,
    alt: "Bitlab Academy",
    web: "https://mmedinasv05.github.io/Lading-Page-Bitlab/",
    github: "https://github.com/mmedinasv05/Lading-Page-Bitlab",
    tecnology: "HTML, CSS, Responsive Design"
  },
  {
    id: 5,
    title: "Amazon Lite.",
    image: project5,
    alt: "Amazon Lite",
    web: "https://mmedinasv05.github.io/Landing-page-Amazon/",
    github: "https://github.com/mmedinasv05/Landing-page-Amazon",
    tecnology: "HTML, CSS, Responsive Design"
  },
  {
    id: 6,
    title: "Portafolio.",
    image: project6,
    alt: "Portafolio",
    web: "https://mmedinasv05.github.io/Portafolio/",
    github: "https://github.com/mmedinasv05/Portafolio",
    tecnology: "React, Responsive Design"
  }
]

export default function Projects() {
  return (
    <main className="potfolio-section">
      <header className="portfolio-title">
        <p className="paragraph">
          En 2019 comencé a realizar proyectos a nivel personal para poder reforzar mis conocimientos y así poco a poco poder ir mejorar mis habilidades y también adquirir experiencia a través de nuevos retos.
        </p>
      </header>
      <section className="portfolio-content">
        {projectList.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              image={project.image}
              alt={project.alt}
              title={project.title}
              tecnology={project.tecnology}
              github={project.github}
              web={project.web}
            />
          );
        })}
      </section>
    </main>
  );
}
