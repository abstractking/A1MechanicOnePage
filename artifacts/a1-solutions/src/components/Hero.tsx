import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#2D2D2D] border-b-4 border-[#FF8C00] py-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute text-[15rem] -top-24 -left-24" style={{ animation: 'spin 30s linear infinite' }}>⚙️</div>
        <div className="absolute text-[12rem] -bottom-32 -right-16" style={{ animation: 'spin 40s linear infinite reverse' }}>⚙️</div>
        <div className="absolute text-[20rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" style={{ animation: 'spin 50s linear infinite' }}>⚙️</div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
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
            <span className="font-['Barlow_Condensed'] text-[clamp(1.5rem,4vw,2.5rem)] text-[#999999] font-medium tracking-[3px] uppercase">
              You Have a Problem?
            </span>
            <span className="font-['Barlow_Condensed'] text-[clamp(2.5rem,7vw,5rem)] text-white font-bold tracking-[4px] uppercase">
              We Are The
            </span>
            <span className="font-['Barlow_Condensed'] text-[clamp(3rem,9vw,6.5rem)] text-[#FF8C00] font-bold tracking-[6px] uppercase" style={{ textShadow: '0 0 30px rgba(255,140,0,0.5)' }}>
              Solution
            </span>
          </motion.h1>

          <motion.p
            className="text-[clamp(1.125rem,2vw,1.375rem)] text-[#999999] mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          >
            24/7 Mobile Mechanic Service — Emergency Roadside Repair &amp; Automotive Solutions
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          >
            <motion.a
              href="tel:14097797780"
              className="flex items-center gap-3 bg-[#FF8C00] text-[#0D0D0D] px-8 py-5 border-[3px] border-[#FFA500] shadow-[0_6px_24px_rgba(255,140,0,0.4)] w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 32px rgba(255,140,0,0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-4xl">📞</span>
              <div className="flex flex-col items-start">
                <span className="font-['Barlow_Condensed'] text-xs font-semibold tracking-[2px] uppercase">Call Bill Now</span>
                <span className="font-['Barlow_Condensed'] text-2xl font-bold tracking-wide">1-409-779-7780</span>
              </div>
            </motion.a>

            <motion.button
              className="bg-transparent text-[#FF8C00] px-8 py-5 text-lg font-bold font-['Barlow_Condensed'] tracking-[2px] uppercase border-[3px] border-[#FF8C00] hover:bg-[#FF8C00] hover:text-[#0D0D0D] transition-colors w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
            >
              Request Service
            </motion.button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { icon: '⚡', text: '24/7 Available' },
              { icon: '🚗', text: 'Mobile Service' },
              { icon: '🔧', text: 'Expert Repairs' },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-3 text-[#999999] font-semibold font-['Barlow_Condensed'] tracking-wide text-lg">
                <span className="text-3xl">{badge.icon}</span>
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
