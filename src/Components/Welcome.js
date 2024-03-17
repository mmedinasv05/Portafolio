import "../Components/CSS/Welcome.css";
import "../Components/CSS/CustomeProperties.css";
import welcomeImage from "./Image/about-image-min.webp";
import Curriculum from "./Curriculum";
import Paragraph from "./Paragraph";

export default function Welcome() {
  return (
    <main className="home-container">
      <section className="home-text animate__animated animate__fadeInUp">
        <h1>Frontend Junior</h1>
        <Paragraph content="Apasionado por el desarrollo web y la construcción de páginas web." />
        <Curriculum />
      </section>
      <img
        src={welcomeImage}
        alt="profile Manuel Chavez"
        className="home-image animate__animated animate__fadeInDown"
      />
    </main>
  );
}
