import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: '24/7 Emergency Roadside Repair',
    description: 'Stranded? We come to you. Fast response for breakdowns, flat tires, battery jumps, and emergency mechanical issues.',
    icon: '🚨'
  },
  {
    title: 'Complete Vehicle Diagnostics',
    description: 'Advanced diagnostic equipment to identify and repair engine, transmission, electrical, and computer system problems.',
    icon: '🔍'
  },
  {
    title: 'Engine Repair & Maintenance',
    description: 'Expert engine work including oil changes, tune-ups, belt replacement, and major engine overhauls.',
    icon: '⚙️'
  },
  {
    title: 'Brake System Service',
    description: 'Complete brake inspection, pad/rotor replacement, fluid service, and ABS system diagnostics and repair.',
    icon: '🛑'
  },
  {
    title: 'Electrical System Repair',
    description: 'Battery testing and replacement, alternator repair, starter service, and complete electrical troubleshooting.',
    icon: '⚡'
  },
  {
    title: 'On-Site Fleet Maintenance',
    description: 'Mobile maintenance programs for commercial fleets. Keep your vehicles running without downtime.',
    icon: '🚛'
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="services" className="py-24 bg-[#1A1A1A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-['Barlow_Condensed'] text-[clamp(2.5rem,6vw,4rem)] text-[#FF8C00] tracking-[4px] uppercase mb-4">
            Our Services
          </h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-[#999999] max-w-xl mx-auto">
            Professional mobile mechanic services — We bring the shop to you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-[#2D2D2D] p-8 border-2 border-[#666666] hover:border-[#FF8C00] hover:shadow-[0_8px_24px_rgba(255,140,0,0.2)] transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="text-5xl mb-5">{service.icon}</div>
              <h3 className="font-['Barlow_Condensed'] text-[clamp(1.2rem,2.5vw,1.4rem)] text-white font-bold tracking-wide uppercase mb-3">
                {service.title}
              </h3>
              <p className="text-[#999999] leading-relaxed text-sm">
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
