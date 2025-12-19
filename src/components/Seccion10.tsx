import React, { useRef, useEffect, useState } from 'react';
import './Seccion10.css';
import { motion } from 'framer-motion';

const Seccion10: React.FC = () => {
  const videoUrl = import.meta.env.VITE_VIDEO_URL_2;
  const fallbackImageUrl = 'https://storage.googleapis.com/welladvisor/landing_welladvisor/seccion-8.png';
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  // Determinar si hay video disponible
  const hasVideo = videoUrl && videoUrl.trim() !== '';
  const shouldShowImage = !hasVideo || hasVideoError;

  useEffect(() => {
    if (!hasVideo) return; // Si no hay video, no configurar el observer

    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Configurar Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          videoElement.play().catch((error) => {
            console.log('Error al reproducir video:', error);
          });
        } else {
          setIsVisible(false);
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(videoElement);

    // Cleanup
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [hasVideo]);

  const handleVideoError = () => {
    console.log('Error al cargar el video, mostrando imagen de respaldo');
    setHasVideoError(true);
  };

  return (
    <motion.section
      id="seccion_10"
      className="seccion-10-container"
      style={{ scrollSnapAlign: 'start' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      <div className="video-container">
        {shouldShowImage ? (
          <img
            src={fallbackImageUrl}
            alt="Salud Mental"
            className="background-image-10"
          />
        ) : (
          <video
            ref={videoRef}
            className="background-video-10"
            loop
            muted
            playsInline
            onError={handleVideoError}
          >
            <source src={videoUrl} type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        )}
      </div>
    </motion.section>
  );
};

export default Seccion10;
