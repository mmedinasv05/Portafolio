import Paragraph from "./Paragraph";
import ListSkills from "./ListSkills";
import { SKILLS } from "./Assets/data";
import Manu from "./Image/about-image-min.webp";

function Aboutme() {
  return (
    <main className="about__container">
      <section className="about__description animate__animated animate__fadeIn">
        <Paragraph content="Hola soy Manuel y puedes llamarme Manu, soy una persona apasionada por el desarrollo web especialmente en el área de Frontend. Aunque aún no cuento con experiencia profesional, he tratado de adquirir ciertas habilidades a través de proyectos personales en los cuales he trabajado con algunas tecnologías del lado del Frontend y actualmente estoy buscando una oportunidad que me permita crecer y desarrollarme profesionalmente en el desarrollo web." />
        <Paragraph content="En 2019 descubrí mi pasión por el desarrollo web al crear mi primera página usando solo HTML, CSS y hasta el día de hoy sigo sintiendo esa misma pasión cuando tengo la oportunidad de crear un sitio web también me considero una persona autodidacta y de rápido aprendizaje ya que me gusta estar aprendiendo cosas nuevas día tras día para luego ponerlas en práctica." />
        <aside className="about__skills">
          {SKILLS.map((skill, index) => {
            return <ListSkills key={index} skills={skill} />;
          })}
        </aside>
      </section>
      <section className="about__image">
        <img
          src={Manu}
          loading="lazy"
          alt="Manuel Chavez"
          className="about__image__profile animate__animated animate__fadeIn"
        />
      </section>
    </main>
  );
}

export default Aboutme;
