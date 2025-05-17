import React, {useState, useEffect} from "react";
import "../../Styles/slider.css"

import city1 from "../../assets/slider-img/SpaceCity1.jpg";
import city2 from "../../assets/slider-img/SpaceCity2.jpeg";
import city3 from "../../assets/slider-img/SpaceCity3.jpeg";

const slides = [
  {
    id: 1,
    title: 'Hoş Geldiniz!',
    description: 'Kloxyn ile dijital dünyanızı modernleştirin.',
    image: city1,
  },
  {
    id: 2,
    title: 'Profesyonel Hizmet',
    description: 'Güvenilir ve kaliteli çözümler sunuyoruz.',
    image: city2,
  },
  {
    id: 3,
    title: 'Sizin İçin Buradayız',
    description: 'Müşteri memnuniyeti her zaman önceliğimizdir.',
    image: city3,
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;