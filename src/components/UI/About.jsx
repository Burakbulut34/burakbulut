import React from 'react';
import logo from '../../assets/site-logo/kloxyn.jpg'; // Logonuzun yolu

import '../../Styles/about.css';

function About() {
  return (
    <section id='about' className="about-section">
      <div className="about-container">
        <div className="about-logo">
          <img src={logo} alt="Kloxyn Logo" />
        </div>
        <div className="about-content">
          <h2>Hakkımızda</h2>
          <p>
            Kloxyn olarak dijital dünyada sizin için modern ve güvenilir çözümler sunuyoruz.
            Ekibimiz yenilikçi yaklaşımlar ve kullanıcı odaklı tasarımlar ile her zaman yanınızda.
          </p>
          <p>
            Amacımız, işletmenizin dijital varlığını güçlendirmek ve sizi rakiplerinizin bir adım önüne taşımaktır.
            Bize güvenin, geleceği birlikte şekillendirelim.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;