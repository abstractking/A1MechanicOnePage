import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '24/7', label: 'Availability' },
  { value: '500+', label: 'Happy Customers' },
  { value: '100%', label: 'Mobile Service' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 bg-[#0D0D0D]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="font-['Barlow_Condensed'] text-[#FF8C00] uppercase mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw + 1rem, 4rem)', letterSpacing: '4px' }}
            >
              About Bill &amp; A1 Solutions
            </h2>
            <div className="space-y-4 text-[#B8B8B8] leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.375rem, 1.0625rem)' }}>
              <p>
                A1 Solutions 24 is your trusted mobile mechanic service serving Texas and Louisiana. Founded by Bill, a veteran automotive technician with over 15 years of hands-on experience, we bring professional-grade repairs directly to your location.
              </p>
              <p>
                Whether you're stranded on the highway, stuck in a parking lot, or need routine maintenance at home — we come to you. No tow trucks, no shop waiting rooms, no hidden fees.
              </p>
              <p className="text-[#FF8C00] font-semibold font-['Barlow_Condensed'] tracking-wide uppercase" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>
                We Are the Solution.
              </p>
            </div>

            <motion.a
              href="tel:14097797780"
              className="inline-flex items-center gap-3 mt-8 bg-[#FF8C00] text-[#0D0D0D] font-bold font-['Barlow_Condensed'] tracking-wide uppercase"
              style={{ minHeight: '52px', padding: '0.875rem 1.75rem', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Call Bill at 1-409-779-7780"
            >
              <span aria-hidden="true">📞</span>
              <span>Call Bill: 1-409-779-7780</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-[#1A1A1A] border-2 border-[#2D2D2D] hover:border-[#FF8C00] p-6 text-center transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 + 0.2 }}
              >
                <div className="font-['Barlow_Condensed'] font-bold text-[#FF8C00] mb-2 tracking-wide" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
                  {stat.value}
                </div>
                <div className="font-['Barlow_Condensed'] text-[#B8B8B8] uppercase tracking-wider" style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
