import React, { useState, useEffect } from 'react';
import './Seccion11.css';
import { motion } from 'framer-motion';

const Seccion11: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.section
      id="seccion_11"
      className="seccion-11-container"
      style={{ scrollSnapAlign: 'start' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      <div className="alliance-card">
        <div className="alliance-content">
          {/* Columna izquierda */}
          <motion.div
            className="left-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="alliance-title">Alianza</h2>

            <img
              src="https://storage.googleapis.com/welladvisor/landing_welladvisor/trazado-78549.svg"
              alt="Separator"
              className="title-separator"
            />

            <p className="alliance-description">
              {isMobile ? (
                // Mobile: Sin BR tags, texto fluido
                "Nuestra alianza con Psicologos.health permite a los profesionales ampliar su visibilidad, fortalecer su presencia digital y acceder a nuevas oportunidades dentro de un ecosistema confiable y especializado."
              ) : (
                // Desktop: Con BR tags
                <>
                  Nuestra alianza con Psicologos.health<br />
                  permite a los profesionales ampliar su<br />
                  visibilidad, fortalecer su presencia digital<br />
                  y acceder a nuevas oportunidades dentro<br />
                  de un ecosistema confiable y especializado.
                </>
              )}
            </p>
          </motion.div>

          {/* Columna derecha */}
          <motion.div
            className="right-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper">
              <img
                src="https://storage.googleapis.com/welladvisor/landing_welladvisor/img_1.png"
                alt="Alliance"
                className="alliance-image"
              />

              <img
                src="https://storage.googleapis.com/welladvisor/landing_welladvisor/trazado-78547.svg"
                alt="Icon"
                className="corner-icon"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Seccion11;
