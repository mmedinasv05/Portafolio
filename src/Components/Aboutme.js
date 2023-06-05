import ListSkills from './ListSkills';
import Manu from './Image/home-image-min.webp'
import '../Components/CSS/Aboutme.css';
import '../Components/CSS/CustomeProperties.css';

const skillsData = ["HTML.", "CSS.", "Bootstrap.", "Javascript.", "React.", "Gitgub."]

function Aboutme() {
  return (
    <main className='about-container'>
      <section className='about-description'>
        <p className='paragraph animate__animated animate__fadeInLeft'>
          Soy Manuel Chavez, pero puedes llamarme Manu, En el 2019 descubrí mi pasión por el desarrollo web al crear mi primera página usando HTML y CSS desde ese entonces y hasta el día de hoy sigo sintiendo esa misma pasión cuando tengo la oportunidad de crear una página web adicional me considero una persona autodidacta y de aprendizaje rápido ya que me gusta estar aprendiendo cosas nuevas día tras día y luego ponerlas en práctica.
        </p>
        <br />
        <p className='paragraph animate__animated animate__fadeInLeft'>
          Aunque carezco de experiencia profesional en el desarrollo web, he adquirido habilidades personales a través de retos y proyectos propios en los cuales he trabajado con diversas tecnologías como las siguientes y actualmente busco una oportunidad que me permita crecer y desarrollarme profesionalmente en el campo del desarrollo web.
        </p>
        <br />
        <aside className='about-skills animate__animated animate__fadeInLeft'>
          {skillsData.map((skill, index) => {
            return <ListSkills key={index} skills={skill} />
          })}
        </aside>
      </section>
      <article className='about-image animate__animated animate__fadeInUp'>
        <img src={Manu} alt="Manuel Chavez" title='Manuel Chavez' className='image-profile' />
      </article>
    </main>
  )
}

export default Aboutme;