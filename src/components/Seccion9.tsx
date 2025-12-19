import React, { useState, useEffect } from 'react';
import './Seccion9.css';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  position: string;
  image: string;
}

interface TestimonialSlide {
  id: number;
  testimonials: Testimonial[];
}

const testimonialData: TestimonialSlide[] = [
  {
    id: 0,
    testimonials: [
      {
        id: 1,
        text: 'La plataforma nos permitió ofrecer nuestros servicios al entorno corporativo de forma simple y organizada. Hoy gestionamos nuestras operaciones de manera eficiente.',
        name: 'Laura Gomez',
        position: 'Psicóloga',
        image: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/foto-1.png'
      },
      {
        id: 2,
        text: 'Unirme a Welladvisor me permitió llegar a empresas y pacientes que antes no tenía forma de alcanzar. La plataforma es clara, segura y realmente acompaña al profesional.',
        name: 'Cristian Torres',
        position: 'Psicólogo',
        image: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/foto-2.png'
      },
      {
        id: 3,
        text: 'No contaba con una página transaccional para mis servicios; ahora, con Welladvisor, puedo ofrecerlos y gestionarlos de forma sencilla.',
        name: 'Diego Ramirez',
        position: 'CEO',
        image: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/foto-3.png'
      }
    ]
  },
  {
    id: 1,
    testimonials: [
      {
        id: 4,
        text: 'La plataforma nos permitió ofrecer nuestros servicios al entorno corporativo de forma simple y organizada. Hoy gestionamos nuestras operaciones de manera eficiente.',
        name: 'Laura Gomez',
        position: 'Psicóloga',
        image: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/foto-1.png'
      },
      {
        id: 5,
        text: 'Unirme a Welladvisor me permitió llegar a empresas y pacientes que antes no tenía forma de alcanzar. La plataforma es clara, segura y realmente acompaña al profesional.',
        name: 'Cristian Torres',
        position: 'Psicólogo',
        image: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/foto-2.png'
      },
      {
        id: 6,
        text: 'No contaba con una página transaccional para mis servicios; ahora, con Welladvisor, puedo ofrecerlos y gestionarlos de forma sencilla.',
        name: 'Diego Ramirez',
        position: 'CEO',
        image: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/foto-3.png'
      }
    ]
  },
  {
    id: 2,
    testimonials: [
      {
        id: 7,
        text: 'La plataforma nos permitió ofrecer nuestros servicios al entorno corporativo de forma simple y organizada. Hoy gestionamos nuestras operaciones de manera eficiente.',
        name: 'Laura Gomez',
        position: 'Psicóloga',
        image: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/foto-1.png'
      },
      {
        id: 8,
        text: 'Unirme a Welladvisor me permitió llegar a empresas y pacientes que antes no tenía forma de alcanzar. La plataforma es clara, segura y realmente acompaña al profesional.',
        name: 'Cristian Torres',
        position: 'Psicólogo',
        image: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/foto-2.png'
      },
      {
        id: 9,
        text: 'No contaba con una página transaccional para mis servicios; ahora, con Welladvisor, puedo ofrecerlos y gestionarlos de forma sencilla.',
        name: 'Diego Ramirez',
        position: 'CEO',
        image: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/foto-3.png'
      }
    ]
  }
];

const Seccion9: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; // Detener el carrusel cuando está en pausa

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <motion.section
      id="seccion_9"
      className="seccion-9-container"
      style={{ scrollSnapAlign: 'start' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      <h2 className="section-9-title">Testimonios que inspiran</h2>

      <div className="testimonial-carousel-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="testimonial-slide"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          >
            {testimonialData[currentSlide].testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card-wrapper"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="testimonial-card-bg" />
                <div className="testimonial-card-content">
                  <p className="testimonial-text">{testimonial.text}</p>

                  <div className="testimonial-author">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="author-image"
                    />
                    <div className="author-info">
                      <p className="author-name">{testimonial.name}</p>
                      <p className="author-position">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores del carrusel */}
      <div className="carousel-indicators-9">
        {testimonialData.map((_, index) => (
          <div
            key={index}
            className={`indicator-line-9 ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Seccion9;