import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  const inputClass =
    'w-full bg-[#1A1A1A] border-2 border-[#666666] focus:border-[#FF8C00] text-white placeholder-[#666666] px-4 py-3 outline-none transition-colors duration-200 font-sans text-sm';

  return (
    <section id="contact" className="py-24 bg-[#0D0D0D]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-['Barlow_Condensed'] text-[clamp(2.5rem,6vw,4rem)] text-[#FF8C00] tracking-[4px] uppercase mb-4">
            Request Service
          </h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-[#999999] max-w-xl mx-auto">
            Fill out the form below or call Bill directly for the fastest response
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" required className={inputClass} />
                <input type="tel" placeholder="Phone Number" required className={inputClass} />
              </div>
              <input type="text" placeholder="Vehicle Make, Model & Year" required className={inputClass} />
              <input type="text" placeholder="Your Location / Address" required className={inputClass} />
              <textarea
                placeholder="Describe your problem..."
                rows={5}
                required
                className={`${inputClass} resize-none`}
              />
              <motion.button
                type="submit"
                className="w-full bg-[#FF8C00] text-[#0D0D0D] py-4 font-bold font-['Barlow_Condensed'] uppercase tracking-widest text-base border-[3px] border-[#FFA500]"
                whileHover={{ scale: 1.02, boxShadow: '0 6px 24px rgba(255,140,0,0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                {sent ? '✅ Message Sent!' : 'Submit Request'}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {[
              { icon: '📞', label: 'Call Bill Direct', value: '1-409-779-7780', href: 'tel:14097797780' },
              { icon: '🕐', label: 'Availability', value: '24 Hours / 7 Days a Week', href: null },
              { icon: '📍', label: 'Service Area', value: 'Southeast Texas & Southwest Louisiana', href: null },
            ].map((info) => (
              <div key={info.label} className="bg-[#1A1A1A] border border-[#2D2D2D] p-6 flex gap-4 items-start hover:border-[#FF8C00]/50 transition-colors">
                <span className="text-3xl mt-1">{info.icon}</span>
                <div>
                  <div className="font-['Barlow_Condensed'] text-[#999999] uppercase tracking-wider text-xs mb-1">{info.label}</div>
                  {info.href ? (
                    <a href={info.href} className="text-[#FF8C00] font-bold font-['Barlow_Condensed'] text-xl tracking-wide hover:text-[#FFA500] transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-white font-semibold text-base">{info.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-[#FF8C00] p-6 text-center">
              <p className="font-['Barlow_Condensed'] text-[#0D0D0D] font-bold uppercase tracking-wider text-sm mb-1">
                For Emergencies — Call Immediately
              </p>
              <a href="tel:14097797780" className="font-['Barlow_Condensed'] text-[#0D0D0D] font-bold text-3xl tracking-wide">
                1-409-779-7780
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
