import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#2D2D2D] border-b-4 border-[#FF8C00]"
      style={{ paddingTop: 'clamp(3rem, 8vw, 6rem)', paddingBottom: 'clamp(3rem, 8vw, 6rem)' }}
    >
      {/* Background gears */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07] gear-bg select-none"
        aria-hidden="true"
        data-gear="true"
        style={{ overflow: 'hidden' }}
      >
        <span
          style={{
            position: 'absolute',
            fontSize: 'clamp(8rem, 20vw, 22rem)',
            top: '-6rem',
            left: '-5rem',
            display: 'inline-block',
            animation: 'spin 35s linear infinite',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            transformOrigin: 'center center',
          }}
        >
          ⚙️
        </span>
        <span
          style={{
            position: 'absolute',
            fontSize: 'clamp(6rem, 15vw, 18rem)',
            bottom: '-5rem',
            right: '-4rem',
            display: 'inline-block',
            animation: 'spin 45s linear infinite reverse',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            transformOrigin: 'center center',
          }}
        >
          ⚙️
        </span>
      </div>

      {/* Content — centered column, all text-center */}
      <div
        className="relative z-10 w-full mx-auto flex flex-col items-center text-center"
        style={{
          maxWidth: '48rem',
          padding: '0 clamp(1rem, 5vw, 2rem)',
        }}
      >
        {/* Eyebrow */}
        <motion.p
          className="font-['Barlow_Condensed'] text-[#B8B8B8] font-medium uppercase tracking-widest text-center w-full"
          style={{ fontSize: 'clamp(0.75rem, 2vw, 1rem)', marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          You Have a Problem?
        </motion.p>

        {/* Headline line 1 */}
        <motion.h1
          className="font-['Barlow_Condensed'] font-bold uppercase text-white text-center w-full"
          style={{
            fontSize: 'clamp(1.75rem, 7vw, 4.5rem)',
            lineHeight: 1.05,
            letterSpacing: 'clamp(1px, 0.3vw, 4px)',
            marginBottom: 'clamp(0rem, 0.5vw, 0.25rem)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We Are The
        </motion.h1>

        {/* Headline — SOLUTION */}
        <motion.h1
          className="font-['Barlow_Condensed'] font-bold uppercase text-[#FF8C00] text-center w-full"
          style={{
            fontSize: 'clamp(3.5rem, 16vw, 9rem)',
            lineHeight: 0.95,
            letterSpacing: 'clamp(2px, 0.5vw, 8px)',
            textShadow: '0 0 40px rgba(255,140,0,0.35)',
            marginBottom: 'clamp(1rem, 3vw, 2rem)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Solution
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-[#B8B8B8] leading-relaxed text-center w-full"
          style={{
            fontSize: 'clamp(0.875rem, 1.8vw, 1.0625rem)',
            maxWidth: '32rem',
            marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          24/7 Mobile Mechanic — Emergency Roadside Repair &amp; Automotive Solutions in Texas &amp; Louisiana
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch w-full"
          style={{ maxWidth: '36rem', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Primary — tap-to-call */}
          <motion.a
            href="tel:14097797780"
            className="flex-1 flex items-center justify-center gap-3 bg-[#FF8C00] text-[#0D0D0D] font-bold border-[3px] border-[#FFA500] shadow-[0_4px_20px_rgba(255,140,0,0.4)]"
            style={{ minHeight: '60px', padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.25rem, 3vw, 2rem)' }}
            whileHover={{ scale: 1.04, boxShadow: '0 6px 28px rgba(255,140,0,0.55)' }}
            whileTap={{ scale: 0.97 }}
            aria-label="Call Bill at 1-409-779-7780"
          >
            <span className="text-2xl flex-shrink-0" aria-hidden="true">📞</span>
            <div className="flex flex-col items-start leading-tight">
              <span className="font-['Barlow_Condensed'] uppercase tracking-[2px]" style={{ fontSize: 'clamp(0.6rem, 1.2vw, 0.7rem)' }}>
                Call Bill Now — 24/7
              </span>
              <span className="font-['Barlow_Condensed'] font-bold tracking-wide" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>
                1-409-779-7780
              </span>
            </div>
          </motion.a>

          {/* Secondary */}
          <motion.button
            className="flex-1 flex items-center justify-center font-['Barlow_Condensed'] font-bold uppercase tracking-widest text-[#FF8C00] border-[3px] border-[#FF8C00] bg-transparent hover:bg-[#FF8C00] hover:text-[#0D0D0D] transition-colors duration-200"
            style={{ minHeight: '60px', padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.75rem)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('contact')}
          >
            Request Service
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap gap-x-6 gap-y-3 justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.65 }}
        >
          {[
            { icon: '⚡', text: '24/7 Available' },
            { icon: '🚗', text: 'Mobile Service' },
            { icon: '🔧', text: 'Expert Repairs' },
          ].map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 text-[#B8B8B8] font-['Barlow_Condensed'] font-semibold uppercase tracking-wide"
              style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)' }}
            >
              <span aria-hidden="true" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)' }}>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
