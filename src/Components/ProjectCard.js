import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Paragraph from "./Paragraph";
import TitleH2 from "./TitleH2";

function ProjectCard({ image, alt, title, tecnology, github, web }) {
  return (
    <figure className="card animate__animated animate__fadeIn">
      <section className="card__image__content">
        <img
          className="card__image"
          src={image}
          loading="lazy"
          alt={alt}
          title={alt}
        />
      </section>
      <figcaption className="card__content">
        <TitleH2 title={title} />
        <section className="card__tecnologys">
          {tecnology.map((el, index) => {
            return <Paragraph key={index} content={el} />;
          })}
        </section>
        <nav className="card__tecnology__links">
          <a
            href={github}
            title="Código"
            target="_blank"
            rel="noreferrer"
            className="card__icons"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={web}
            title="Página"
            target="_blank"
            rel="noreferrer"
            className="card__icons"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </nav>
      </figcaption>
    </figure>
  );
}

export default ProjectCard;
