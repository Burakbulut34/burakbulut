import React from "react";
import "../../Styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <div className="logo">Kloxyn</div>
          <h2>İletişime Geçin</h2>
          <p>Her zaman size yardımcı olmaktan memnuniyet duyarız.</p>
        </div>

        <div className="contact-content">
          {/* Sol taraf: Form */}
          <div className="contact-form">
           <form method="post">
           <input type="text" placeholder="Ad" />
            <input type="text" placeholder="Soyad" />
            <input type="email" placeholder="E-posta" />
            <textarea placeholder="Mesajınız..." rows="5"></textarea>
            <button type="submit">Gönder</button>
           </form>
          </div>

          {/* Sağ taraf: Bilgiler */}
          <div className="contact-info">
            <h3>İletişim Bilgileri</h3>
            <p><strong>Adres:</strong> İstanbul, Türkiye</p>
            <p><strong>Telefon:</strong> +90 555 123 4567</p>
            <p><strong>E-posta:</strong> info@kloxyn.com</p>
            <p><strong>Çalışma Saatleri:</strong> 09:00 - 18:00 (Hafta içi)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;