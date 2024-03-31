import ListSkills from "./ListSkills";
import Manu from "./Image/home-image-min.webp";
import "../Components/CSS/Aboutme.css";
import "../Components/CSS/CustomeProperties.css";
import Paragraph from "./Paragraph";
import { SKILLS } from "./Assets/data";

export default function Aboutme() {
  return (
    <main className="about-container">
      <section className="about-image animate__animated animate__fadeInDown">
        <img
          src={Manu}
          loading="lazy"
          alt="Manuel Chavez"
          className="image-profile"
        />
      </section>
      <section className="about-description animate__animated animate__fadeInUp">
        <Paragraph
          content="En 2019 descubrí mi pasión por el desarrollo web al crear mi primera
          página usando HTML y CSS. Desde entonces, y hasta el día de hoy sigo
          sintiendo esa misma pasión cuando tengo la oportunidad de crear una
          página web. Me considero una persona autodidacta y de rápido
          aprendizaje ya que me gusta estar aprendiendo cosas nuevas día tras
          día para luego ponerlas en práctica."
        />
        <Paragraph
          content="Aunque aún no cuento con experiencia profesional, he tratado de
          adquirir ciertas habilidades a través de desafíos y proyectos
          personales, en los cuales he trabajado con algunas tecnologías del
          lado del Frontend como las siguientes y actualmente estoy buscando una
          oportunidad que me permita crecer y desarrollarme profesionalmente en
          el campo del desarrollo web."
        />
        <aside className="about-skills">
          {SKILLS.map((skill, index) => {
            return <ListSkills key={index} skills={skill} />;
          })}
        </aside>
      </section>
    </main>
  );
}
