import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app" style={{ background: '#0D0D0D', color: '#FFFFFF', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Coverage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
