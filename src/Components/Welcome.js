import React from 'react';
import '../Components/CSS/Welcome.css';
import '../Components/CSS/CustomeProperties.css';
import welcomeImage from './Image/home-image-min.webp';
import Curriculum from './Curriculum';

export default function Welcome() {

  return (
    <section className="home-section">
      <section className='home-text'>
        <h1>Hola! 👋</h1>
        <p>Mi nombre es Manuel Chavez y soy un Frontend Developer Junior apasionado por la creación de páginas web.</p>
        <Curriculum />
      </section>
      <img src={welcomeImage} alt="profile Manuel Chavez" title='profile Manuel Chavez' className='welcome-image' />
    </section>
  )
}