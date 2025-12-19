import React from 'react';
import './Seccion8.css';
import { motion } from 'framer-motion';

const Seccion8: React.FC = () => {
  return (
    <motion.section
      id="seccion_8"
      className="seccion-8-container"
      style={{ scrollSnapAlign: 'start' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      {/* Icono de flecha superior */}
      <img
        src="https://storage.googleapis.com/welladvisor/landing_welladvisor/arrow-2.svg"
        alt="Arrow"
        className="top-arrow-8"
      />

      <div className="columns-wrapper-8">
        {/* Columna izquierda - Información del paso */}
        <motion.div
          className="left-card-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="step-circle-8">
            <span className="step-number-8">03</span>
          </div>

          <h3 className="step-title-8">
            Verificación de<br />
            identidad (KYC/KYB)
          </h3>

          <p className="step-description-8">
            Para garantizar la seguridad del<br />
            ecosistema, deberás completar la<br />
            verificación según tu perfil:
          </p>

          <p className="kyc-info">
            <span className="kyc-label">KYC – Profesionales:</span> identidad y<br />
            reconocimiento facial.<br />
            <span className="kyc-label">KYB – Empresas:</span> Validación legal y<br />
            verificación del NIT.
          </p>
        </motion.div>

        {/* Columna derecha - Imagen con verificación */}
        <motion.div
          className="right-card-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img
            src="https://storage.googleapis.com/welladvisor/landing_welladvisor/img-paso-3.png"
            alt="Verification"
            className="verification-image"
          />

          <img
            src="https://storage.googleapis.com/welladvisor/landing_welladvisor/icono.png"
            alt="Icon"
            className="side-icon"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Seccion8;
