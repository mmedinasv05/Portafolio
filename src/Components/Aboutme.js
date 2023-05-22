import ListSkills from './ListSkills';
import Manu from './Image/about-image-min.webp'
import '../Components/CSS/Aboutme.css';
import '../Components/CSS/CustomeProperties.css';

const skillsData = ["HTML.", "CSS.", "Bootstrap.", "Javascript.", "React.", "Gitgub."]

function Aboutme() {
  return (
    <main className='about-container'>
      <section className='about-description'>
        <p className='paragraph'>
          Hola soy Manuel Chavez y me pueden llamar Manu, En el 2019 tuve mi primera experiencia de poder crear mi primera pagina web usando HTML y CSS desde allí sentí una gran pasión por el desarrollo web del lado del Frontend viendo las grandes cosas que se pueden crear combinando HTML, CSS y JS y hasta el día de hoy sigo sintiendo esa misma pasión cuando tengo la oportunidad de crear una página web adicional me considero autodidacta ya que me gusta estar aprendiendo cosas nuevas día tras día y luego ponerlas en práctica.
        </p>
        <br />
        <p className='paragraph'>
          Me considero una persona que me gusta estar en constante aprendizaje de nuevas habilidades y técnicas y poder aplicarlas en la práctica, aunque aún no tengo experiencia profesional en el campo del desarrollo web he adquirido experiencia personal a través de retos y proyectos personales donde he trabajado con tecnologías como las siguientes y ando en buscar de esa oportunidaddonde pueda desarrollarme profesionalmente.
        </p>
        <br />
        <aside className='about-skills'>
          {skillsData.map((skill, index) => {
            return <ListSkills key={index} skills={skill} />
          })}
        </aside>
      </section>
      <article className='about-image'>
        <img src={Manu} alt="Manuel Chavez" title='Manuel Chavez' className='image-profile' />
      </article>
    </main>
  )
}

export default Aboutme;