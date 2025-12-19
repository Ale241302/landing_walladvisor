import { lazy, Suspense } from 'react';

// Lazy load de todas las secciones
const Seccion1 = lazy(() => import('./components/Seccion1'));
const Seccion2 = lazy(() => import('./components/Seccion2'));
const Seccion3 = lazy(() => import('./components/Seccion3'));
const Seccion4 = lazy(() => import('./components/Seccion4'));
const Seccion5 = lazy(() => import('./components/Seccion5'));
const Seccion6 = lazy(() => import('./components/Seccion6'));
const Seccion7 = lazy(() => import('./components/Seccion7'));
const Seccion8 = lazy(() => import('./components/Seccion8'));
const Seccion9 = lazy(() => import('./components/Seccion9'));
const Seccion10 = lazy(() => import('./components/Seccion10'));
const Seccion11 = lazy(() => import('./components/Seccion11'));
const Seccion12 = lazy(() => import('./components/Seccion12'));
const Footer = lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <Seccion1 />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '75.729vw' }} />}>
        <Seccion2 />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '75vw' }} />}>
        <Seccion3 />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '75vw' }} />}>
        <Seccion4 />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '75vw' }} />}>
        <Seccion5 />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '75vw' }} />}>
        <Seccion6 />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '75vw' }} />}>
        <Seccion7 />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '75vw' }} />}>
        <Seccion8 />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '75vw' }} />}>
        <Seccion9 />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '75vw' }} />}>
        <Seccion10 />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '75vw' }} />}>
        <Seccion11 />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '75vw' }} />}>
        <Seccion12 />
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '20vw' }} />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
