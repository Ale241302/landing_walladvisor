import React from 'react';
import './Seccion7.css';
import { motion } from 'framer-motion';

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

const Seccion7: React.FC = () => {
  const registerUrl = import.meta.env.VITE_REGISTER_URL;

  return (
    <motion.section
      id="seccion_7"
      className="seccion-7-container"
      style={{ scrollSnapAlign: 'start' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      {/* Icono de flecha superior */}
      <img
        src="https://storage.googleapis.com/welladvisor/landing_welladvisor/arrow.svg"
        alt="Arrow"
        className="top-arrow"
      />

      <div className="columns-wrapper-7">
        {/* Columna izquierda - Imagen con badge */}
        <motion.div
          className="left-card-7"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="https://storage.googleapis.com/welladvisor/landing_welladvisor/img-paso-2.png"
            alt="Step 2 Preview"
            className="step-preview-image"
          />

          {/* Badge de ecommerce integrado */}
          <div className="ecommerce-badge">
            <div className="badge-circle">
              <img
                src="https://storage.googleapis.com/welladvisor/landing_welladvisor/trazado-78473.svg"
                alt="Icon"
                className="badge-icon"
              />
            </div>
            <span className="badge-text">Ecommerce integrado</span>
          </div>
        </motion.div>

        {/* Columna derecha - Información del paso */}
        <motion.div
          className="right-card-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="step-circle-7">
            <span className="step-number-7">02</span>
          </div>

          <h3 className="step-title-7">
            Validación y<br />
            completación de<br />
            tu perfil
          </h3>

          <p className="step-description-7">
            Para avanzar en la validación y<br />
            habilitar tu perfil, deberás cargar la<br />
            información adicional.
          </p>

          <a href={registerUrl} className="start-now-btn wave-btn">
            <WaveText text="Empieza ya" className="btn-text-7" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Seccion7;
