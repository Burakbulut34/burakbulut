import React from "react";
import "../../Styles/footer.css";
import 'remixicon/fonts/remixicon.css';

const Footer = () =>{

    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h4>Bağlantılar</h4>
          <ul>
            <li><a href="#home">Anasayfa</a></li>
            <li><a href="#services">Servisler</a></li>
            <li><a href="#about">Hakkımızda</a></li>
            <li><a href="#contact">İletişim</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Sosyal Medya</h4>
          <ul>
            <li><a href="#"><i class="ri-instagram-line"></i></a></li>
            <li><a href="#"><i class="ri-github-line"></i></a></li>
            <li><a href="#"><i class="ri-linkedin-line"></i></a></li>
          </ul>
        </div>
       
        <div className="newsletter">
          <h4>Bültenimize abone olun</h4>
          <p>Bizden gelen yeni ve heyecan verici haberlerin yer aldığı aylık özet.</p>
          <input type="email" placeholder="E-posta Adresi" />
          <button>Abone Ol</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} Burak Bulut. Her hakkı saklıdır.</p>
        <div className="social-icons">
        </div>
      </div>
    </footer>
    );
};

export default Footer;