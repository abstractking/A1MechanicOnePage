import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: '24/7 Emergency Roadside Repair',
    description: 'Stranded? We come to you. Fast response for breakdowns, flat tires, battery jumps, and emergency mechanical issues.',
  },
  {
    title: 'Complete Vehicle Diagnostics',
    description: 'Advanced diagnostic equipment to identify and repair engine, transmission, electrical, and computer system problems.',
  },
  {
    title: 'Engine Repair & Maintenance',
    description: 'Expert engine work including oil changes, tune-ups, belt replacement, and major engine overhauls.',
  },
  {
    title: 'Brake System Service',
    description: 'Complete brake inspection, pad/rotor replacement, fluid service, and ABS system diagnostics and repair.',
  },
  {
    title: 'Electrical System Repair',
    description: 'Battery testing and replacement, alternator repair, starter service, and complete electrical troubleshooting.',
  },
  {
    title: 'On-Site Fleet Maintenance',
    description: 'Mobile maintenance programs for commercial fleets. Keep your vehicles running without downtime.',
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#1A1A1A] overflow-hidden" ref={ref}>
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
            Our Services
          </h2>
          <p
            className="text-[#B8B8B8] max-w-xl mx-auto"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw + 0.25rem, 1.25rem)' }}
          >
            Professional mobile mechanic services — We bring the shop to you
          </p>
        </motion.div>

        {/* Grid: items-stretch ensures equal-height rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-[#2D2D2D] border-2 border-[#888888] hover:border-[#FF8C00] cursor-default flex flex-col h-full"
              style={{
                padding: 'clamp(1.25rem, 3vw, 2rem)',
                transition:
                  'border-color 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease-out, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              whileHover={{ y: -8, boxShadow: '0 8px 24px rgba(255,140,0,0.2)' }}
            >
              <h3
                className="font-['Barlow_Condensed'] text-white font-bold tracking-wide uppercase mb-3"
                style={{ fontSize: 'clamp(1.1rem, 2vw + 0.25rem, 1.4rem)' }}
              >
                {service.title}
              </h3>
              {/* flex-grow pushes description to fill remaining card height */}
              <p className="text-[#B8B8B8] leading-relaxed flex-grow" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.25rem, 1rem)' }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
