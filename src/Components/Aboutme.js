import ListSkills from './ListSkills';
import Manu from './Image/about-image-min.webp'
import '../Components/CSS/Aboutme.css';
import '../Components/CSS/CustomeProperties.css';

const skillsData = ["HTML.", "CSS.", "Bootstrap.", "Javascript.", "React.", "Gitgub."]

export default function Aboutme() {
  return (
    <main className="about-section">
      <article className='about-description'>
        <p className="paragraph">
          Hola soy Manuel Chavez y me pueden llamar Manu, En el 2019 tuve mi primera experiencia de poder crear mi primera pagina web usando HTML y CSS desde allí sentí una gran pasión por el desarrollo web en el lado Frontend viendo las grandes cosas que se pueden crear combinando HTML, CSS y JS y hasta el día de hoy sigo sintiendo esa misma pasión cuando tengo la oportunidad de crear una página web adicional me considero autodidacta ya que me gusta estar aprendiendo cosas nuevas día tras día y luego ponerlas en práctica.
        </p>
        <p className="paragraph mt-3">
          Por el momento no cuento con experiencia a nivel profesional solo a nivel personal a través de retos, estoy en buscando de una oportunidad para poder desarrollarme como profesional y así poner en practica todo lo aprendido hasta el momento y estas son algunas de las tecnologías con las que he tenido la oportunidad de trabajar.
        </p>
        <aside className='skills-section'>
          {skillsData.map((skill, index) => {
            return <ListSkills key={index} skills={skill} />
          })}
        </aside>
      </article>
      <section className="about-image">
        <img src={Manu} alt="Manuel Chavez" title='Manuel Chavez' />
      </section>
    </main>
  )
}