import React from 'react';
import '../Components/CSS/Welcome.css';
import '../Components/CSS/CustomeProperties.css';
import welcomeImage from './Image/home-image-min.webp';
import Curriculum from './Curriculum';

function Welcome() {

  return (
    <section className="home-container">
      <section className='home-text'>
        <h1>Frontend Developer.</h1>
        <p className='paragraph'>Un apasionado por el desarrollo web, me encanta trabajar en el proceso de construcción de sitios web.</p>
        <Curriculum />
      </section>
      <img src={welcomeImage} alt="profile Manuel Chavez" title='profile Manuel Chavez' className='home-image' />
    </section>
  )
}

export default Welcome;