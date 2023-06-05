import React from 'react';
import '../Components/CSS/Welcome.css';
import '../Components/CSS/CustomeProperties.css';
import welcomeImage from './Image/about-image-min.webp';
import Curriculum from './Curriculum';

function Welcome() {

  return (
    <section className="home-container">
      <section className='home-text'>
        <h1 className='animate__animated animate__zoomIn'>Frontend Developer </h1>
        <p className='paragraph animate__animated animate__zoomIn'>Un apasionado por el desarrollo web y me encanta trabajar en el proceso de construcción de sitios web.</p>
        <Curriculum />
      </section>
      <img src={welcomeImage} alt="profile Manuel Chavez" title='profile Manuel Chavez' className='home-image animate__animated animate__zoomIn' />
    </section>
  )
}

export default Welcome;