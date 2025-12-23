import React from 'react';
import './Seccion2.css';
import { motion } from 'framer-motion';

interface FeatureCard {
  id: number;
  text: string;
  icon: string;
  iconWidth: string;
  iconHeight: string;
  circlePosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-leftt' | 'top-rightt';
}

const leftFeatures: FeatureCard[] = [
  {
    id: 1,
    text: 'Ofrece tus servicios de salud mental y<br />bienestar.',
    icon: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/trazado-78499.svg',
    iconWidth: '2.135vw',
    iconHeight: '1.406vw',
    circlePosition: 'top-left'
  },
  {
    id: 2,
    text: 'Gestiona reservas<br />y pagos fácilmente.',
    icon: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/icon-awesome-calendar-check.svg',
    iconWidth: '1.615vw',
    iconHeight: '1.875vw',
    circlePosition: 'top-right'
  },
  {
    id: 3,
    text: 'Conecta con nuevos clientes y empresas.',
    icon: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/icon-ionic-ios-business.svg',
    iconWidth: '1.302vw',
    iconHeight: '1.719vw',
    circlePosition: 'bottom-left'
  }
];

const rightFeatures: FeatureCard[] = [
  {
    id: 1,
    text: 'Publica y gestiona tus servicios en un solo lugar.',
    icon: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/icon-awesome-edit.svg',
    iconWidth: '2.135vw',
    iconHeight: '1.875vw',
    circlePosition: 'top-rightt'
  },
  {
    id: 2,
    text: 'Recibe acompañamiento y formación continua.',
    icon: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/icon-awesome-hand-holding-heart.svg',
    iconWidth: '2.135vw',
    iconHeight: '1.875vw',
    circlePosition: 'top-leftt'
  },
  {
    id: 3,
    text: 'Obtén tecnología marca blanca.',
    icon: 'https://storage.googleapis.com/welladvisor/landing_welladvisor/trazado-78550.svg',
    iconWidth: '2.135vw',
    iconHeight: '1.823vw',
    circlePosition: 'bottom-right'
  }
];

const Seccion2: React.FC = () => {
  return (
    <motion.section
      id='seccion_2'
      className="seccion-2-container"
      style={{ scrollSnapAlign: 'start' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      <h2 className="seccion-2-title">¿Qué puedo hacer en Welladvisor?</h2>

      <div className="content-wrapper">
        {/* Lado izquierdo */}
        <div className="left-cards">
          {/* Primera card - grande */}
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={`circle-icon ${leftFeatures[0].circlePosition}`}>
              <img
                src={leftFeatures[0].icon}
                alt="feature icon"
                style={{ width: leftFeatures[0].iconWidth, height: leftFeatures[0].iconHeight }}
              />
            </div>
            <p
              className="feature-text"
              dangerouslySetInnerHTML={{ __html: leftFeatures[0].text }}
            />
          </motion.div>

          {/* Dos cards pequeñas lado a lado */}
          <div className="small-cards-row">
            {leftFeatures.slice(1).map((feature, index) => (
              <motion.div
                key={feature.id}
                className="feature-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`circle-icon ${feature.circlePosition}`}>
                  <img
                    src={feature.icon}
                    alt="feature icon"
                    style={{ width: feature.iconWidth, height: feature.iconHeight }}
                  />
                </div>
                <p
                  className="feature-text"
                  dangerouslySetInnerHTML={{ __html: feature.text }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Imagen central */}
        <div className="images-container">
          <img
            src="https://storage.googleapis.com/welladvisor/landing_welladvisor/grupo-54006.svg"
            alt="background decoration"
            className="background-circle"
          />
          <img
            src="https://storage.googleapis.com/welladvisor/landing_welladvisor/Grupo%2054079.svg"
            alt="app mockup"
            className="app-mockup"
          />
        </div>

        {/* Lado derecho */}
        <div className="right-cards">
          {/* Dos cards pequeñas lado a lado */}
          <div className="small-cards-row">
            {rightFeatures.slice(0, 2).map((feature, index) => (
              <motion.div
                key={feature.id}
                className="feature-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`circle-icon ${feature.circlePosition}`}>
                  <img
                    src={feature.icon}
                    alt="feature icon"
                    style={{ width: feature.iconWidth, height: feature.iconHeight }}
                  />
                </div>
                <p
                  className="feature-text"
                  dangerouslySetInnerHTML={{ __html: feature.text }}
                />
              </motion.div>
            ))}
          </div>

          {/* Tercera card - grande */}
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={`circle-icon ${rightFeatures[2].circlePosition}`}>
              <img
                src={rightFeatures[2].icon}
                alt="feature icon"
                style={{ width: rightFeatures[2].iconWidth, height: rightFeatures[2].iconHeight }}
              />
            </div>
            <p
              className="feature-text"
              dangerouslySetInnerHTML={{ __html: rightFeatures[2].text }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Seccion2;
