import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      } backdrop-blur-md border-b-[3px] border-[#FF8C00]`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Main navigation"
    >
      {/* Inner row: capped width with generous horizontal padding so CTA never clips */}
      <div
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: '1200px',
          minHeight: '64px',
          padding: '0 clamp(1rem, 4vw, 2.5rem)',
        }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 sm:gap-3 cursor-pointer py-2 flex-shrink-0"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          aria-label="Back to top"
          onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span
            className="text-3xl sm:text-4xl gear-bg"
            aria-hidden="true"
            style={{
              display: 'inline-block',
              animation: 'spin 20s linear infinite',
              willChange: 'transform',
              backfaceVisibility: 'hidden',
            }}
          >
            ⚙️
          </span>
          <div className="flex flex-col">
            <span className="font-['Barlow_Condensed'] text-lg sm:text-2xl text-[#FF8C00] font-bold tracking-widest uppercase leading-none">
              A1 Solutions
            </span>
            <span className="font-['Barlow_Condensed'] text-[10px] sm:text-xs text-[#B8B8B8] font-medium tracking-wider uppercase">
              24 HR Mobile Mechanic
            </span>
          </div>
        </motion.div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8" role="list">
          {['services', 'about', 'coverage', 'contact'].map((section) => (
            <button
              key={section}
              role="listitem"
              onClick={() => scrollToSection(section)}
              className="font-['Barlow_Condensed'] text-[#B8B8B8] uppercase tracking-wider font-semibold hover:text-[#FF8C00] transition-colors relative group"
              style={{ minHeight: '44px', padding: '0.5rem 0.25rem', fontSize: 'clamp(0.7rem, 1vw, 0.875rem)' }}
            >
              {section}
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#FF8C00] group-hover:w-full transition-all duration-300" aria-hidden="true" />
            </button>
          ))}
        </div>

        {/* Desktop CTA — flex-shrink-0 prevents compression */}
        <motion.a
          href="tel:14097797780"
          className="hidden md:flex items-center gap-2 bg-[#FF8C00] text-[#0D0D0D] font-bold font-['Barlow_Condensed'] tracking-wide uppercase flex-shrink-0"
          style={{ minHeight: '48px', padding: '0.625rem 1.25rem', fontSize: 'clamp(0.7rem, 1vw, 0.875rem)', whiteSpace: 'nowrap' }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Call us now at 1-409-779-7780"
        >
          <span aria-hidden="true">📞</span>
          <span>Call Now</span>
        </motion.a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#FF8C00] flex items-center justify-center"
          style={{ minHeight: '44px', minWidth: '44px', fontSize: '1.75rem' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-[#1A1A1A] border-t border-[#FF8C00]/30 flex flex-col gap-1"
          style={{ padding: '0.75rem clamp(1rem, 4vw, 2.5rem)' }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          role="menu"
        >
          {['services', 'about', 'coverage', 'contact'].map((section) => (
            <button
              key={section}
              role="menuitem"
              onClick={() => scrollToSection(section)}
              className="font-['Barlow_Condensed'] text-[#B8B8B8] uppercase tracking-wider font-semibold hover:text-[#FF8C00] text-left transition-colors"
              style={{ minHeight: '48px', padding: '0.625rem 0', fontSize: '1rem' }}
            >
              {section}
            </button>
          ))}
          <a
            href="tel:14097797780"
            className="bg-[#FF8C00] text-[#0D0D0D] font-bold font-['Barlow_Condensed'] tracking-wide uppercase text-center mt-2"
            style={{ minHeight: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.95rem' }}
            role="menuitem"
          >
            📞 Call Now: 1-409-779-7780
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
