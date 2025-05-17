import React from "react";
import "../../Styles/services.css";
import Logo from "../../assets/site-logo/kloxyn.jpg"
const services = [
  {
    title: "Web Tasarımı",
    description: "Modern, hızlı ve mobil uyumlu web siteleri tasarlıyoruz.",
  },
  {
    title: "Yazılım Geliştirme",
    description: "İhtiyacınıza özel profesyonel yazılım çözümleri sunuyoruz.",
  },
  {
    title: "SEO Optimizasyonu",
    description: "Web sitenizin Google'da üst sıralarda yer almasını sağlıyoruz.",
  },
  {
    title: "Danışmanlık",
    description: "Dijital dünyada büyümeniz için stratejik rehberlik sağlıyoruz.",
  },
];

function Services() {
  return (
    <section id="services" className="services-section">
      <img src={Logo} alt="logo" className="site-logo" />
      <div className="services-container">
        <h2 className="services-title">Hizmetlerimiz</h2>
        <p className="services-subtitle">Size en iyi dijital çözümleri sunuyoruz</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;