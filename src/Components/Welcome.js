import "../Components/CSS/Welcome.css";
import "../Components/CSS/CustomeProperties.css";
import Avatar from "./Image/avatar.svg";
//import Curriculum from "./Curriculum";
import Paragraph from "./Paragraph";
import Curriculum from "./Curriculum";

export default function Welcome() {
  return (
    <main className="home__container">
      <img
        src={Avatar}
        alt="Avatar Manuel Chávez"
        className="home__avatar animate__animated animate__fadeIn"
      />
      <section className="home__content animate__animated animate__fadeIn">
        <h1 className="home__title">Frontend Developer Junior</h1>
        <Paragraph content="Un apasionado por el desarrollo web y disfruto crear páginas." />
        <Curriculum />
      </section>
    </main>
  );
}
