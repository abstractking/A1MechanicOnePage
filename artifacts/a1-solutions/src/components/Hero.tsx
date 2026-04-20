import { motion } from 'framer-motion';

const gearStyle = (
  animation: string,
  extra?: React.CSSProperties
): React.CSSProperties => ({
  position: 'absolute',
  animation,
  willChange: 'transform',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  transformOrigin: 'center center',
  ...extra,
});

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#2D2D2D] border-b-4 border-[#FF8C00] py-16">
      {/* Decorative background gears — hidden for print/a11y */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 gear-bg"
        aria-hidden="true"
        data-gear="true"
      >
        <span
          style={gearStyle('spin 30s linear infinite', {
            fontSize: 'clamp(6rem, 15vw, 15rem)',
            top: '-4rem',
            left: '-4rem',
          })}
        >
          ⚙️
        </span>
        <span
          style={gearStyle('spin 40s linear infinite reverse', {
            fontSize: 'clamp(5rem, 12vw, 12rem)',
            bottom: '-6rem',
            right: '-3rem',
          })}
        >
          ⚙️
        </span>
        <span
          style={gearStyle('spin 50s linear infinite', {
            fontSize: 'clamp(8rem, 18vw, 20rem)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.5,
          })}
        >
          ⚙️
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <motion.h1
            className="flex flex-col gap-2 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <span
              className="font-['Barlow_Condensed'] text-[#B8B8B8] font-medium uppercase"
              style={{ fontSize: 'clamp(1.25rem, 3vw + 0.5rem, 2.5rem)', letterSpacing: 'clamp(1px, 0.3vw, 3px)' }}
            >
              You Have a Problem?
            </span>
            <span
              className="font-['Barlow_Condensed'] text-white font-bold uppercase"
              style={{ fontSize: 'clamp(2rem, 5vw + 1rem, 5rem)', letterSpacing: 'clamp(2px, 0.4vw, 4px)' }}
            >
              We Are The
            </span>
            <span
              className="font-['Barlow_Condensed'] text-[#FF8C00] font-bold uppercase"
              style={{
                fontSize: 'clamp(2.5rem, 7vw + 1rem, 6.5rem)',
                letterSpacing: 'clamp(2px, 0.5vw, 6px)',
                textShadow: '0 0 30px rgba(255,140,0,0.5)',
                wordBreak: 'break-word',
              }}
            >
              Solution
            </span>
          </motion.h1>

          <motion.p
            className="text-[#B8B8B8] mb-10 leading-relaxed max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(1rem, 1.5vw + 0.25rem, 1.375rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          >
            24/7 Mobile Mechanic Service — Emergency Roadside Repair &amp; Automotive Solutions
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-stretch sm:items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          >
            <motion.a
              href="tel:14097797780"
              className="flex items-center justify-center gap-3 bg-[#FF8C00] text-[#0D0D0D] px-8 border-[3px] border-[#FFA500] shadow-[0_6px_24px_rgba(255,140,0,0.4)] w-full sm:w-auto"
              style={{ minHeight: '64px', padding: '1.25rem 2rem' }}
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 32px rgba(255,140,0,0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-3xl sm:text-4xl flex-shrink-0" aria-hidden="true">📞</span>
              <div className="flex flex-col items-start">
                <span className="font-['Barlow_Condensed'] text-xs font-semibold tracking-[2px] uppercase">Call Bill Now</span>
                <span
                  className="font-['Barlow_Condensed'] font-bold tracking-wide"
                  style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)' }}
                >
                  1-409-779-7780
                </span>
              </div>
            </motion.a>

            <motion.button
              className="bg-transparent text-[#FF8C00] font-bold font-['Barlow_Condensed'] tracking-[2px] uppercase border-[3px] border-[#FF8C00] hover:bg-[#FF8C00] hover:text-[#0D0D0D] transition-colors w-full sm:w-auto"
              style={{ minHeight: '64px', padding: '1.25rem 2rem', fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
            >
              Request Service
            </motion.button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-5 sm:gap-8 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { icon: '⚡', text: '24/7 Available' },
              { icon: '🚗', text: 'Mobile Service' },
              { icon: '🔧', text: 'Expert Repairs' },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 sm:gap-3 text-[#B8B8B8] font-semibold font-['Barlow_Condensed'] tracking-wide"
                style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}
              >
                <span className="text-2xl sm:text-3xl" aria-hidden="true">{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
