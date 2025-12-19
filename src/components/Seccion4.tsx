import React, { useState, useRef } from 'react';
import './Seccion4.css';
import { motion, AnimatePresence } from 'framer-motion';

const Seccion4: React.FC = () => {
  const videoUrl = import.meta.env.VITE_VIDEO_URL;
  const fallbackImage = 'https://storage.googleapis.com/welladvisor/landing_welladvisor/grupo-54034.png';
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <motion.section
      id="seccion_4"
      className="seccion-4-container"
      style={{ scrollSnapAlign: 'start' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      <div className="video-wrapper">
        {videoUrl ? (
          <video
            ref={videoRef}
            className="background-video"
            onPause={handleVideoPause}
            onEnded={handleVideoEnded}
            controls={isPlaying}
          >
            <source src={videoUrl} type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        ) : (
          <div className="fallback-image" />
        )}

        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              className="play-overlay"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={handlePlayVideo}
            >
              <img
                src="https://storage.googleapis.com/welladvisor/landing_welladvisor/grupo-54035.svg"
                alt="Play"
                className="play-icon"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Seccion4;
