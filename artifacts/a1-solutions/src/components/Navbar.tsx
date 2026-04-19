import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D0D0D]/98 shadow-[0_4px_20px_rgba(255,140,0,0.3)]'
          : 'bg-[#0D0D0D]/95'
      } backdrop-blur-md border-b-[3px] border-[#FF8C00] py-4`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-4xl" style={{ display: 'inline-block', animation: 'spin 20s linear infinite' }}>⚙️</span>
          <div className="flex flex-col">
            <span className="font-['Barlow_Condensed'] text-xl sm:text-2xl text-[#FF8C00] font-bold tracking-widest uppercase">
              A1 Solutions
            </span>
            <span className="font-['Barlow_Condensed'] text-[10px] sm:text-xs text-[#999999] font-medium tracking-wider uppercase">
              24 HR Mobile Mechanic
            </span>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['services', 'about', 'coverage', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="font-['Barlow_Condensed'] text-[#999999] uppercase tracking-wider text-sm font-semibold hover:text-[#FF8C00] transition-colors relative group"
            >
              {section}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF8C00] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        <motion.a
          href="tel:14097797780"
          className="hidden md:flex items-center gap-2 bg-[#FF8C00] text-[#0D0D0D] px-5 py-3 font-bold font-['Barlow_Condensed'] tracking-wide uppercase text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>📞</span>
          <span>Call Now</span>
        </motion.a>

        <button
          className="md:hidden text-[#FF8C00] text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          className="md:hidden bg-[#1A1A1A] border-t border-[#FF8C00]/30 px-4 py-4 flex flex-col gap-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {['services', 'about', 'coverage', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="font-['Barlow_Condensed'] text-[#999999] uppercase tracking-wider text-base font-semibold hover:text-[#FF8C00] text-left transition-colors"
            >
              {section}
            </button>
          ))}
          <a
            href="tel:14097797780"
            className="bg-[#FF8C00] text-[#0D0D0D] px-4 py-3 font-bold font-['Barlow_Condensed'] tracking-wide uppercase text-sm text-center"
          >
            📞 Call Now: 1-409-779-7780
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
