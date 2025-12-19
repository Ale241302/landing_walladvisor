import React, { useState, useEffect } from 'react';
import './Seccion5.css';
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
  title: string;
  titleLine1: string;
  titleLine2: string;
  benefits: string[];
  buttonText: string;
  image: string;
}

const slides: SlideData[] = [
  {
    id: 0,
    title: 'Beneficios',
    titleLine1: 'Beneficios',
    titleLine2: 'profesionales',
    benefits: [
      'Mayor visibilidad de tus servicios.',
      'Acceso a agendas llenas por demanda empresarial.',
      'Herramientas para gestionar citas, pagos y reportes.',
      'Perfil profesional completo para mostrar tu trayectoria.'
    ],
    buttonText: 'Regístrate',
    image: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/img_2.png'
  },
  {
    id: 1,
    title: 'Beneficios',
    titleLine1: 'Beneficios',
    titleLine2: 'económicos',
    benefits: [
      'Ingresos adicionales.',
      'Conciliaciones rápidas.',
      'Comisiones claras.',
      'Pagos seguros.'
    ],
    buttonText: 'Regístrate',
    image: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/img_bene2.png'
  },
  {
    id: 2,
    title: 'Beneficios',
    titleLine1: 'Beneficios',
    titleLine2: 'operativos',
    benefits: [
      'Soporte continuo.',
      'Capacitación constante.',
      'Aprendizaje autónomo.',
      'Acceso a innovación.'
    ],
    buttonText: 'Regístrate',
    image: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/img_bene3.png'
  }
];

const Seccion5: React.FC = () => {
  const registerUrl = import.meta.env.VITE_REGISTER_URL;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const active = slides[currentSlide];
  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleDotClick = (index: number) => {
    setPreviousSlide(currentSlide);
    setCurrentSlide(index);
  };

  return (
    <motion.section
      id="beneficios"
      className="seccion-5-container"
      style={{ scrollSnapAlign: 'start' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      <div className="carousel-wrapper">
        {/* Indicadores verticales a la izquierda */}
        <div className="vertical-indicators">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`indicator-dot 
                ${index === currentSlide ? 'active' : ''} 
                ${index === previousSlide && currentSlide > previousSlide ? 'drip-down' : ''}
                ${index === previousSlide && currentSlide < previousSlide ? 'drip-up' : ''}
              `}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>

        {/* Contenido del carrusel */}
        <div className="carousel-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="slide-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              {/* Columna izquierda - Imagen */}
              <div className="left-side">
                <div className="image-box">
                  <img
                    src={active.image}
                    alt="Professional"
                    className={`professional-image professional-image--${active.id}`}
                  />
                </div>
              </div>

              {/* Columna derecha - Contenido */}
              <div className="right-side">
                <h2 className="section-title">
                  <span style={{ color: '#8476c3' }}>{slides[currentSlide].titleLine1}</span>
                  <br />
                  {slides[currentSlide].titleLine2}
                </h2>

                <ul className="benefits-list">
                  {slides[currentSlide].benefits.map((benefit, index) => (
                    <li key={index} className="benefit-item">
                      {benefit}
                    </li>
                  ))}
                </ul>

                <a href={registerUrl} className="register-button wave-btn">
                  <WaveText text={slides[currentSlide].buttonText} className="button-text" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Seccion5;
