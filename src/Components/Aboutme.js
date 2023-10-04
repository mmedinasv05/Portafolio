import ListSkills from "./ListSkills";
import Manu from "./Image/home-image-min.webp";
import "../Components/CSS/Aboutme.css";
import "../Components/CSS/CustomeProperties.css";

const skillsData = [
  "HTML.",
  "CSS.",
  "Bootstrap.",
  "Javascript.",
  "React.",
  "Git.",
];

function Aboutme() {
  return (
    <main className="about-container">
      <section className="about-image animate__animated animate__fadeInDown">
        <img src={Manu} alt="Manuel Chavez" className="image-profile" />
      </section>
      <section className="about-description animate__animated animate__fadeInUp">
        <p className="paragraph">
          Soy Manuel Chavez pero puedes llamarme Manu, En el 2019 descubrí mi
          pasión por el desarrollo web al crear mi primera página web usando
          HTML y CSS desde ese entonces y hasta el día de hoy sigo sintiendo esa
          misma pasión cuando tengo la oportunidad de crear una página web ya
          que se puede crear grandes cosas combinando HTML, CSS y Javascript
          adicional me considero una persona autodidacta y de aprendizaje rápido
          ya que me gusta estar aprendiendo cosas nuevas día tras día y luego
          tratar de ponerlas en práctica.
        </p>
        <br />
        <p className="paragraph">
          Aunque carezco de experiencia profesional en el desarrollo web, he
          adquirido ciertas habilidades a través de retos personales y proyectos
          propios en los cuales he trabajado con algunas tecnologías como las
          siguientes y actualmente busco una oportunidad que me permita crecer y
          desarrollarme profesionalmente en el campo del desarrollo web.
        </p>
        <br />
        <aside className="about-skills">
          {skillsData.map((skill, index) => {
            return <ListSkills key={index} skills={skill} />;
          })}
        </aside>
      </section>
    </main>
  );
}

export default Aboutme;
