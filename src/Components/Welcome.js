import React from "react";
import "../Components/CSS/Welcome.css";
import "../Components/CSS/CustomeProperties.css";
import welcomeImage from "./Image/about-image-min.webp";
import Curriculum from "./Curriculum";

function Welcome() {
  return (
    <main className="home-container">
      <section className="home-text animate__animated animate__fadeInUp">
        <h1>Frontend Developer</h1>
        <p className="paragraph">
          Apasionado por el desarrollo web y en la construcción de páginas web.
        </p>
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

export default Welcome;
