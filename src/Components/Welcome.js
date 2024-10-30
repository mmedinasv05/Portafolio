import "../Components/CSS/Welcome.css";
import "../Components/CSS/CustomeProperties.css";
import Avatar from "./Image/home-image-min.jpg";
//import Curriculum from "./Curriculum";
import Paragraph from "./Paragraph";
import Curriculum from "./Curriculum";

export default function Welcome() {
  return (
    <main className="home__container">
      <img
        src={Avatar}
        alt="Avatar Manuel Chávez"
        className="home__image animate__animated animate__fadeIn"
      />
      <section className="home__content animate__animated animate__fadeIn">
        <h1 className="home__title">Frontend Developer</h1>
        <Paragraph content="Apasionado por el desarrollo web y la creación de páginas" />
        <section className="home__curriculum">
          <Curriculum />
          <div className="curriculum__message hidden__message">
            <Paragraph content="Curriculum descargado" />
          </div>
        </section>
        <section className="hidden__message">Curriculum descargado</section>
      </section>
    </main>
  );
}
