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
          I am Manuel Chavez but you can call me Manu. In 2019 I discovered my
          passion for web development by creating my first website using HTML
          and CSS since then and to this day I still feel that same passion when
          I have the opportunity to create a page web since you can create great
          things by combining HTML, CSS and additional Javascript. I consider
          myself a self-taught and fast learning person since I like to be
          learning new things day after day and then try to put them into
          practice.
        </p>
        <br />
        <p className="paragraph">
          Although I lack professional experience in web development, I have
          acquired certain skills through personal challenges and my own
          projects in which I have worked with some technologies such as the
          following and I am currently looking for an opportunity that allows me
          to grow and develop professionally in the field of development. Web.
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
