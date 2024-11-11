import { useEffect, useState } from "react";
import { projectList } from "./Assets/data";
import ProjectCard from "./ProjectCard";
import Paragraph from "./Paragraph";
import Loader from "./Loader";

function Projects() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProject(...project, projectList);
    }, 2000);
  }, []);

  return (
    <main className="potfolio__container container__section">
      <header className="portfolio__title animate__animated animate__fadeIn">
        <Paragraph content="En 2020 comencé a realizar proyectos a nivel personal para poder reforzar mis conocimientos y así poco a poco ir mejorando mis habilidades y sobre todo poder ganar experiencia a través de nuevos retos." />
      </header>
      <section className="portfolio__content">
        {project.length <= 0 ? (
          <Loader />
        ) : (
          project.map((project) => {
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
          })
        )}
      </section>
    </main>
  );
}

export default Projects;
