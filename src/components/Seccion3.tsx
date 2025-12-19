import React from 'react';
import './Seccion3.css';
import { motion } from 'framer-motion';

interface Step {
  number: string;
  text: string;
}

const leftSteps: Step[] = [
  { number: '01', text: 'Te registras según tu perfil.' },
  { number: '02', text: 'Validamos tu perfil conforme<br />a la normativa vigente.' },
  { number: '03', text: 'Accede a tu panel de<br />profesional.' }
];

const rightSteps: Step[] = [
  { number: '04', text: 'Crea y publica  tus servicios.' },
  { number: '05', text: 'Los usuarios descubren tu<br />oferta.' },
  { number: '06', text: 'Recibe reservas, pagos y<br />acompañamiento continuo.' }
];

const Seccion3: React.FC = () => {
  return (
    <motion.section
      id='seccion_3'
      className="seccion-3-container"
      style={{ scrollSnapAlign: 'start' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      <h2 className="seccion-3-title">Tu recorrido en Welladvisor</h2>

      <div className="steps-wrapper">
        <div className="steps-column">
          {leftSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="step-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-circle">
                <span className="step-number">{step.number}</span>
              </div>
              <p
                className="step-text"
                dangerouslySetInnerHTML={{ __html: step.text }}
              />
            </motion.div>
          ))}
        </div>

        <div className="steps-column">
          {rightSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="step-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-circle">
                <span className="step-number">{step.number}</span>
              </div>
              <p
                className="step-text"
                dangerouslySetInnerHTML={{ __html: step.text }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Seccion3;
