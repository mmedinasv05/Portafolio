import Avatar from "./Image/home-image-min.webp";
import Paragraph from "./Paragraph";

function Welcome() {
  return (
    <main className="home__container container__section">
      <img
        src={Avatar}
        alt="Avatar Manuel Chávez"
        className="home__image animate__animated animate__fadeIn"
      />
      <section className="home__content animate__animated animate__fadeIn">
        <h1 className="home__title">Frontend Developer</h1>
        <Paragraph content="Apasionado por el desarrollo web y la creación de páginas" />
      </section>
    </main>
  );
}

export default Welcome;
