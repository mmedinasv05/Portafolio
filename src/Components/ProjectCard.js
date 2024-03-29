import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({
  image,
  alt,
  title,
  tecnology,
  github,
  web,
}) {
  return (
    <figure className="project-card">
      <img src={image} alt={alt} title={alt} className="project-image" />
      <figcaption className="project-content">
        <h2 className="project-title">{title}</h2>
        <section className="project-tecnology">
          <p className="tecnology">{tecnology}</p>
        </section>
        <nav className="project-links">
          <a
            href={github}
            title="Código"
            target="_blank"
            rel="noreferrer"
            className="project-icon"
          >
            <FontAwesomeIcon icon={faGithub} className="icon-font" />
          </a>
          <a
            href={web}
            title="Página"
            target="_blank"
            rel="noreferrer"
            className="project-icon"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </nav>
      </figcaption>
    </figure>
  );
}
