import React from 'react';
import '../Components/CSS/Welcome.css';
import '../Components/CSS/CustomeProperties.css';
import welcomeImage from './Image/home-image-min.jpg';
import Curriculum from './Curriculum';

export default function Welcome() {

  return (
    <section className="home-section">
      <section className='home-text'>
        <h1>Hi! People</h1>
        <p>My name is Manuel Chavez and I am a Junior Frontend Developer passionate about creating web pages.</p>
        <Curriculum />
      </section>
      <img src={welcomeImage} alt="profile Manuel Chavez" className='welcome-image' />
    </section>
  )
}