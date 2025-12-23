import React from 'react';
import './Seccion6.css';
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

const Seccion6: React.FC = () => {
  const registerUrl = import.meta.env.VITE_REGISTER_URL;

  return (
    <motion.section
      id="seccion_6"
      className="seccion-6-container"
      style={{ scrollSnapAlign: 'start' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      <h2 className="section-6-title">¿Cómo me registro?</h2>

      <div className="columns-wrapper">
        {/* Columna izquierda */}
        <motion.div
          className="left-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="step-circle">
            <span className="step-number">01</span>
          </div>

          <h3 className="step-title">Crea tu cuenta</h3>

          <p className="step-description">
            Selecciona tu tipo de perfil<br />
            (Profesional o Empresa), completa<br />
            la información básica y acepta los<br />
            Términos y Condiciones y la Política<br />
            de Privacidad.
          </p>

          <a href={registerUrl} className="register-now-btn wave-btn">
            <WaveText text="Regístrate ahora" className="btn-text" />
          </a>
        </motion.div>

        {/* Columna derecha */}
        <motion.div
          className="right-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img
            src="https://storage.googleapis.com/welladvisor/landing_welladvisor/registro.png"
            alt="Preview"
            className="preview-image"
          />

          <img
            src="https://storage.googleapis.com/welladvisor/landing_welladvisor/asset.svg"
            alt="Decoration"
            className="decoration-dots"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Seccion6;
