import React, { useState } from 'react';
import '../../Styles/header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">Burak. B</div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#home">Anasayfa</a>
          <a href="#services">Hizmetler</a>
          <a href="#about">Hakkımızda</a>
          <a href="#contact">İletişim</a>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;