import ProjectCard from "./ProjectCard";
import project1 from './Image/1-min.png'
import project2 from './Image/2-min.png'
import project3 from './Image/3-min.png'
import project4 from './Image/4-min.png'
import project5 from './Image/5-min.png'
import project6 from './Image/6-min.png'
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
    title: "Portfolio.",
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
          In 2019 I began to carry out projects on a personal level to be able to reinforce my knowledge and thus, little by little, be able to improve my skills and also gain experience through new challenges.
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
