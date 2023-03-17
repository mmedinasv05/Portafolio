import ListSkills from './ListSkills';
import Manu from './Image/about-image-min.jpg'
import '../Components/CSS/Aboutme.css';
import '../Components/CSS/CustomeProperties.css';

const skillsData = ["HTML.", "CSS.", "Bootstrap.", "Javascript.", "React.", "Gitgub."]

export default function Aboutme() {

  return (
    <main className="about-section">
      <article className='about-description'>
        <p className="paragraph">
          Hello, I'm Manuel Chavez and you can call me Manu, a student at the Technological University of El Salvador of the Computer Science degree, In 2019 I had my first experience of being able to create my first web page using HTML and CSS from there I felt a great passion for web development on the Frontend side seeing the great things that can be created and to this day I still feel that same passion when I have the opportunity to create an additional web page I consider myself self-taught as I like to learn new things day after day day and then put them into practice.
        </p>
        <p className="paragraph mt-3">
          At the moment I do not have experience at a professional level, only on a personal level through personal challenges and I am looking for an opportunity to develop myself as a professional and thus put into practice everything I have learned and these are some of the technologies I have worked with.
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