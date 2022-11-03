import React from 'react';
import '../Components/CSS/Welcome.css';
import '../Components/CSS/CustomeProperties.css';

export default function Welcome() {

  return (
    <section className="home-section">
      <section className='home-text'>
        <h1>Manu <br /> Chavez</h1>
        <p>Frontend develper junior.</p>
      </section>
      <section className='home-radius'></section>
    </section>
  )
}