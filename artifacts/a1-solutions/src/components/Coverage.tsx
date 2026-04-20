import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const areas = [
  { state: 'Texas', cities: ['Beaumont', 'Port Arthur', 'Orange', 'Lumberton', 'Vidor', 'Groves', 'Nederland', 'Port Neches'] },
  { state: 'Louisiana', cities: ['Lake Charles', 'Sulphur', 'Westlake', 'DeRidder', 'Leesville', 'Jennings', 'Welsh', 'Iowa'] },
];

const Coverage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="coverage" className="py-16 sm:py-24 bg-[#1A1A1A] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto" style={{ padding: '0 clamp(1.25rem, 5vw, 2.5rem)' }}>
        <motion.div
          className="text-center"
          style={{ marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-['Barlow_Condensed'] text-[#FF8C00] uppercase mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw + 1rem, 4rem)', letterSpacing: '4px' }}
          >
            Coverage Area
          </h2>
          <p className="text-[#B8B8B8] max-w-xl mx-auto" style={{ fontSize: 'clamp(0.875rem, 1.5vw + 0.25rem, 1.25rem)' }}>
            We travel to you anywhere in Southeast Texas &amp; Southwest Louisiana
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, i) => (
            <motion.div
              key={area.state}
              className="bg-[#2D2D2D] border-2 border-[#888888] p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3
                className="font-['Barlow_Condensed'] text-[#FF8C00] font-bold tracking-wider uppercase mb-5 pb-3 border-b border-[#FF8C00]/30"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
              >
                {area.state}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {area.cities.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-[#B8B8B8]" style={{ fontSize: 'clamp(0.8rem, 1vw + 0.25rem, 0.9375rem)' }}>
                    <span className="text-[#FF8C00] text-xs" aria-hidden="true">▶</span>
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center bg-[#0D0D0D] border border-[#FF8C00]/30 p-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <p className="text-[#B8B8B8]" style={{ fontSize: 'clamp(0.8rem, 1vw + 0.25rem, 0.9375rem)' }}>
            <span className="text-[#FF8C00] font-semibold">Don't see your city?</span> Call Bill — we may still be able to reach you. Extra travel fees may apply for distant locations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Coverage;
