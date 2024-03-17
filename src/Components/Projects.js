import ProjectCard from "./ProjectCard";
import "../Components/CSS/Projects.css";
import "../Components/CSS/CustomeProperties.css";
import Paragraph from "./Paragraph";
import { projectList } from "./Assets/data";

export default function Projects() {
  return (
    <main className="potfolio-container">
      <header className="portfolio-title animate__animated animate__fadeInDown">
        <Paragraph
          content="En 2019 comencé a realizar proyectos a nivel personal para poder
          reforzar mis conocimientos y así poco a poco poder mejorar mis
          habilidades y sobre todo poder ganar experiencia a través de nuevos
          retos."
        />
      </header>
      <section className="portfolio-content animate__animated animate__fadeInUp">
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
