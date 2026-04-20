import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Coverage = lazy(() => import('./components/Coverage'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingSpinner = () => (
  <div
    style={{
      background: '#0D0D0D',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FF8C00',
    }}
  >
    <span
      style={{
        fontSize: '3rem',
        display: 'inline-block',
        animation: 'spin 2s linear infinite',
      }}
    >
      ⚙️
    </span>
  </div>
);

function App() {
  return (
    <div style={{ background: '#0D0D0D', color: '#FFFFFF', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
        <About />
        <Coverage />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
