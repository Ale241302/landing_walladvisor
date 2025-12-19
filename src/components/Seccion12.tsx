import React, { useEffect, useState } from 'react';
import './Seccion12.css';
import CountryCodeSelect from './CountryCodeSelect';
import { motion } from 'framer-motion';

interface FormData {
  nombre: string;
  correo: string;
  codigoPais: string;
  telefono: string;
  mensaje: string;
}

interface FormErrors {
  nombre: boolean;
  correo: boolean;
  telefono: boolean;
  mensaje: boolean;
}

interface WaveTextProps {
  text: string;
  className?: string;
}

const WaveText: React.FC<WaveTextProps> = ({ text, className = '' }) => {
  return (
    <span className={className}>
      {text.split('').map((letter, index) => (
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

const Seccion12: React.FC = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const keyHash = import.meta.env.VITE_KEYHAS;

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (!showSuccessModal) return;

    const t = window.setTimeout(() => {
      setShowSuccessModal(false);
    }, 5000);

    return () => window.clearTimeout(t);
  }, [showSuccessModal]);

  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    codigoPais: '+57',
    telefono: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<FormErrors>({
    nombre: false,
    correo: false,
    telefono: false,
    mensaje: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Limpiar error cuando el usuario empieza a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Solo permitir números
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setFormData(prev => ({ ...prev, telefono: value }));
      if (errors.telefono) {
        setErrors(prev => ({ ...prev, telefono: false }));
      }
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      nombre: formData.nombre.trim() === '',
      correo: formData.correo.trim() === '' || !validateEmail(formData.correo),
      telefono: formData.telefono.trim() === '',
      mensaje: formData.mensaje.trim() === ''
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const isFormValid = (): boolean => {
    return (
      formData.nombre.trim() !== '' &&
      formData.correo.trim() !== '' &&
      validateEmail(formData.correo) &&
      formData.telefono.trim() !== '' &&
      formData.mensaje.trim() !== ''
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${apiUrl}mensajecontacto`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: keyHash,
          nombre: formData.nombre,
          correo: formData.correo,
          telefono: `${formData.codigoPais} ${formData.telefono}`,
          mensaje: formData.mensaje
        })
      });

      if (response.ok) {
        setFormData({
          nombre: '',
          correo: '',
          codigoPais: '+57',
          telefono: '',
          mensaje: ''
        });

        setShowSuccessModal(true);
      } else {
        alert('Error al enviar el mensaje. Por favor intenta de nuevo.');
      }

    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contacto"
      className="seccion-12-container"
      style={{ scrollSnapAlign: 'start' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      <div className="contact-wrapper">
        {/* Columna izquierda */}
        <motion.div
          className="left-column-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="contact-main-title">Contáctanos</h2>

          <h3 className="contact-subtitle">
            ¿Tienes un servicio de bienestar y quieres<br />
            ser parte de Welladvisor?
          </h3>

          <p className="contact-description">
            Déjanos tus datos y te acompañamos en el<br />
            proceso para unirte a nuestro ecosistema.
          </p>

          <div className="contact-info-item">
            <div className="contact-icon-wrapper">
              <img
                src="https://storage.googleapis.com/welladvisor/landing_welladvisor/icon-material-local-phone.svg"
                alt="Phone"
              />
            </div>
            <div className="contact-details">
              <p className="contact-label">Teléfono</p>
              <p className="contact-value">+57 305 229 0022</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon-wrapper">
              <img
                src="https://storage.googleapis.com/welladvisor/landing_welladvisor/icon-zocial-email.svg"
                alt="Email"
              />
            </div>
            <div className="contact-details">
              <p className="contact-label">Correo electrónico</p>
              <p className="contact-value">hola@welladvisor.co</p>
            </div>
          </div>
        </motion.div>

        {/* Columna derecha */}
        <motion.div
          className="right-column-12"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              {/* Nombre completo */}
              <div className="form-group">
                <label className="form-label">Nombre completo*</label>
                <input
                  type="text"
                  name="nombre"
                  className={`form-input ${errors.nombre ? 'error' : ''}`}
                  placeholder="Nombre completo"
                  value={formData.nombre}
                  onChange={handleInputChange}
                />
              </div>

              {/* Correo electrónico */}
              <div className="form-group">
                <label className="form-label">Correo electrónico*</label>
                <input
                  type="email"
                  name="correo"
                  className={`form-input ${errors.correo ? 'error' : ''}`}
                  placeholder="Correo electrónico"
                  value={formData.correo}
                  onChange={handleInputChange}
                />
              </div>

              {/* Número de teléfono */}
              <div className="form-group">
                <label className="form-label">Número de teléfono*</label>
                <div className="phone-input-group">
                  <CountryCodeSelect
                    value={formData.codigoPais}
                    onChange={(dialCode) =>
                      setFormData((prev) => ({ ...prev, codigoPais: dialCode }))
                    }
                  />
                  <input
                    type="text"
                    name="telefono"
                    className={`phone-input ${errors.telefono ? 'error' : ''}`}
                    placeholder="Número de teléfono"
                    value={formData.telefono}
                    onChange={handlePhoneInput}
                    inputMode="numeric"
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div className="form-group">
                <label className="form-label">Mensaje*</label>
                <textarea
                  name="mensaje"
                  className={`form-textarea ${errors.mensaje ? 'error' : ''}`}
                  placeholder="Escribe un mensaje..."
                  value={formData.mensaje}
                  onChange={handleInputChange}
                />
              </div>

              {/* Botón de enviar */}
              <button
                type="submit"
                className="submit-btn wave-btn"
                disabled={!isFormValid() || isSubmitting}
              >
                <WaveText text={isSubmitting ? 'Enviando...' : 'Enviar mensaje'} />
              </button>
            </form>
          </div>

          {/* Icono decorativo */}
          <img
            src="https://storage.googleapis.com/welladvisor/landing_welladvisor/asset-2.svg"
            alt="Decoration"
            className="form-decoration-icon"
          />
        </motion.div>
      </div>
      {showSuccessModal && (
        <div className="modal-overlay-success" role="dialog" aria-modal="true">
          <motion.div
            className="modal-success-card"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="modal-success-icon">✓</div>
            <div className="modal-success-texts">
              <p className="modal-success-title">Mensaje enviado</p>
              <p className="modal-success-subtitle">Te contactaremos pronto.</p>
            </div>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default Seccion12;
