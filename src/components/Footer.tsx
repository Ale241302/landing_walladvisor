import React, { useEffect, useState } from "react";
import "./Footer.css";

type ModalKind = "terms" | "privacy" | null;

const LegalModal: React.FC<{
    open: boolean;
    title: string;
    text: string;
    onClose: () => void;
}> = ({ open, title, text, onClose }) => {
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", onKeyDown);
        document.body.classList.add("wa-modal-open");

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.classList.remove("wa-modal-open");
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="wa-modal-overlay" onMouseDown={onClose}>
            <div
                className="wa-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="wa-modal-title"
                onMouseDown={(e) => e.stopPropagation()}
            >
                <button className="wa-modal-close" onClick={onClose} aria-label="Cerrar">
                    <img
                        src="https://storage.googleapis.com/welladvisor/landing_welladvisor/x.svg"
                        alt="Cerrar"
                    />
                </button>

                <h2 id="wa-modal-title" className="wa-modal-title">
                    {title}
                </h2>

                <div className="wa-modal-body">
                    <p className="wa-modal-text">{text}</p>
                </div>

                <button className="wa-modal-btn" onClick={onClose}>
                    Aceptar
                </button>
            </div>
        </div>
    );
};

const Footer: React.FC = () => {
    const loginUrl = import.meta.env.VITE_LOGIN_URL;
    const registerUrl = import.meta.env.VITE_REGISTER_URL;

    const [modal, setModal] = useState<ModalKind>(null);

    // Reemplaza estos textos por tu contenido real
    const termsText =
        "Términos y condiciones...\n\nPega aquí el texto completo. Si es largo, tendrá scroll.";
    const privacyText =
        "Política de privacidad...\n\nPega aquí el texto completo. Si es largo, tendrá scroll.";

    return (
        <>
            <footer className="footer-container">
                {/* Sección superior con 3 columnas */}
                <div className="footer-columns">
                    {/* Columna izquierda */}
                    <div className="footer-left">
                        <img
                            src="https://storage.googleapis.com/welladvisor/landing_welladvisor/logo-principal.svg"
                            alt="Welladvisor Logo"
                            className="footer-logo"
                        />
                        <p className="footer-description">
                            Trabajamos para que lleves tu impacto
                            <br />
                            más lejos en bienestar y salud mental.
                        </p>
                    </div>

                    {/* Columna centro */}
                    <div className="footer-center">
                        <h3 className="footer-title">Explorar</h3>
                        <nav className="footer-nav">
                            <a href={registerUrl} className="footer-link">
                                Empieza tu registro
                            </a>
                            <a href="#beneficios" className="footer-link">
                                Beneficios
                            </a>
                            <a href="#contacto" className="footer-link">
                                Contacto
                            </a>
                        </nav>
                    </div>

                    {/* Columna derecha */}
                    <div className="footer-right">
                        <h3 className="footer-title">Acceso</h3>
                        <nav className="footer-nav">
                            <a href={loginUrl} className="footer-link">
                                Iniciar sesión
                            </a>
                            <a href={registerUrl} className="footer-link">
                                Registrarse
                            </a>

                            <a
                                href="#"
                                className="footer-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setModal("terms");
                                }}
                            >
                                Términos y condiciones
                            </a>

                            <a
                                href="#"
                                className="footer-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setModal("privacy");
                                }}
                            >
                                Política de privacidad
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Sección inferior */}
                <div className="footer-bottom">
                    <img
                        src="https://storage.googleapis.com/welladvisor/landing_welladvisor/l-nea-568.svg"
                        alt="Separator"
                        className="footer-separator"
                    />

                    <div className="footer-bottom-content">
                        <p className="footer-copyright">© 2025 Welladvisor.</p>

                        <div className="footer-social">
                            <a
                                href="https://www.facebook.com/@welladvisor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <img
                                    src="https://storage.googleapis.com/welladvisor/landing_welladvisor/grupo-51518.svg"
                                    alt="Facebook"
                                />
                            </a>

                            <a
                                href="http://instagram.com/welladvisor.co"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <img
                                    src="https://storage.googleapis.com/welladvisor/landing_welladvisor/grupo-34547.svg"
                                    alt="Instagram"
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/welladvisor-co-037ba2369/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <img
                                    src="https://storage.googleapis.com/welladvisor/landing_welladvisor/grupo-34546.svg"
                                    alt="LinkedIn"
                                />
                            </a>

                            <a
                                href="https://www.youtube.com/@Welladvisor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <img
                                    src="https://storage.googleapis.com/welladvisor/landing_welladvisor/grupo-53742.svg"
                                    alt="YouTube"
                                />
                            </a>

                            <a
                                href="https://x.com/welladvisorco"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <img
                                    src="https://storage.googleapis.com/welladvisor/landing_welladvisor/grupo-53885.svg"
                                    alt="Twitter"
                                />
                            </a>

                            <a
                                href="https://www.tiktok.com/@welladvisor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <img
                                    src="https://storage.googleapis.com/welladvisor/landing_welladvisor/grupo-53743.svg"
                                    alt="TikTok"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            <LegalModal
                open={modal === "terms"}
                title="Términos y condiciones"
                text={termsText}
                onClose={() => setModal(null)}
            />

            <LegalModal
                open={modal === "privacy"}
                title="Política de privacidad"
                text={privacyText}
                onClose={() => setModal(null)}
            />
        </>
    );
};

export default Footer;
