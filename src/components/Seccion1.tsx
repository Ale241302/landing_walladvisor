import React, { useState, useEffect } from 'react';
import './Seccion1.css';
import { motion, AnimatePresence } from 'framer-motion';

// Componente para el efecto de ola en el texto
const WaveText: React.FC<{ text: string; className: string }> = ({ text, className }) => {
  const letters = text.split('');

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="wave-letter"
          style={{ '--letter-index': index } as React.CSSProperties}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  );
};

interface SlideData {
  id: number;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  joinText: string;
  contactText: string;
  mainImage: string;
  topRightIcon: string;
  floatingImage: string;
  backgroundImage: string;
}

const slides: SlideData[] = [
  {
    id: 0,
    title: (
      <>
        ¿Ofreces servicios<br />de salud mental<br />o bienestar?
      </>
    ),
    subtitle: (
      <>
        Conecta tus servicios con personas y<br />
        empresas que buscan bienestar real.
      </>
    ),
    joinText: 'Únete a Welladvisor',
    contactText: 'Contacto',
    mainImage: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/img.png',
    topRightIcon: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/separte_welladvisor.svg',
    floatingImage: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/grupo-53893.png',
    backgroundImage: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/fondo-slider-1.png',
  },
  {
    id: 1,
    title: (
      <>
        Lleva<br />tu bienestar a<br />más empresas
      </>
    ),
    subtitle: (
      <>
        Publica una sola vez y llega a empresas<br />
        en toda Latinoamérica en un solo lugar.
      </>
    ),
    joinText: 'Ofrecer mis servicios',
    contactText: 'Contacto',
    mainImage: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/grupo-58099.png',
    topRightIcon: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/asset2_2.svg',
    floatingImage: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/asset-1_slide2.svg',
    backgroundImage: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/fondo_slider2.png',
  },
  {
    id: 2,
    title: (
      <>
        Un espacio<br />para quienes<br />cuidan a otros
      </>
    ),
    subtitle: (
      <>
        Tu servicio de bienestar, en un<br />
        ecosistema de oportunidades reales.
      </>
    ),
    joinText: 'Quiero unirme',
    contactText: 'Contacto',
    mainImage: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/mockup.png',
    topRightIcon: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/asset-3.svg',
    floatingImage: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/asset_slide3.svg',
    backgroundImage: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/fondo-slider-3.png',
  },
];

const Seccion1: React.FC = () => {
  const loginUrl = import.meta.env.VITE_LOGIN_URL;
  const registerUrl = import.meta.env.VITE_REGISTER_URL;
  const joinUrl = import.meta.env.VITE_JOIN_URL;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="seccion-1-container"
      style={{
        scrollSnapAlign: 'start',
        backgroundImage: `url(${slide.backgroundImage})`,
        transition: 'background-image 0.5s ease-in-out',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      <div className="header-block">
        <div className="logo" />

        <nav className="nav-links">
          <a href="#" className="nav-link">Inicio</a>
          <a href="#beneficios" className="nav-link">Beneficios</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>

        <a href={loginUrl} className="login-btn">Iniciar sesión</a>

        <a href={registerUrl} className="register-btn wave-btn">
          <WaveText text="Registro" className="register-text" />
          <img
            src="https://storage.googleapis.com/welladvisor/landing_welladvisor/icon-ionic-ios-arrow-forward.svg"
            alt="arrow"
            className="register-icon"
          />
        </a>
      </div>

      <div className="carousel-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className={`content-row slide-${slide.id}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="left-column">
              <h1 className="main-title">{slide.title}</h1>

              <p className="subtitle">{slide.subtitle}</p>

              <div className="action-buttons">
                <a href={joinUrl} className="join-btn wave-btn">
                  <WaveText text={slide.joinText} className="join-text" />
                </a>

                <a href="#contacto" className="contact-btn">
                  {slide.contactText}
                  <img
                    src="https://storage.googleapis.com/welladvisor/landing_welladvisor/icon-feather-arrow-right.svg"
                    alt="arrow"
                    className="arrow-right-icon"
                  />
                </a>
              </div>
            </div>

            <div className="right-column">
              <img
                src={slide.topRightIcon}
                className="icon-top-right"
                alt="decoration"
              />
              <img
                src={slide.mainImage}
                className="main-image"
                alt="main"
              />
              <img
                src={slide.floatingImage}
                className="floating-image"
                alt="floating"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator-line ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Seccion1;
