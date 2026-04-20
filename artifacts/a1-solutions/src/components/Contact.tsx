import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  const inputClass =
    'w-full min-w-0 bg-[#1A1A1A] border-2 border-[#888888] focus:border-[#FF8C00] text-white placeholder-[#888888] outline-none transition-colors duration-200';

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0D0D0D] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto" style={{ padding: '0 clamp(1rem, 5vw, 2rem)' }}>

        <motion.div
          className="text-center"
          style={{ marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="font-['Barlow_Condensed'] text-[#FF8C00] uppercase"
            style={{ fontSize: 'clamp(1.75rem, 5vw + 0.5rem, 3.5rem)', letterSpacing: '4px', marginBottom: '0.5rem' }}
          >
            Request Service
          </h2>
          <p className="text-[#B8B8B8] mx-auto" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.0625rem)', maxWidth: '30rem' }}>
            Fill out the form or call Bill directly for fastest response
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">

          {/* Form column — y-only animation, no horizontal drift */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-3" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className={inputClass}
                  style={{ minHeight: '50px', padding: '0 1rem', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
                  aria-label="Your name"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className={inputClass}
                  style={{ minHeight: '50px', padding: '0 1rem', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
                  aria-label="Your phone number"
                />
              </div>
              <input
                type="text"
                placeholder="Vehicle Make, Model & Year"
                required
                className={inputClass}
                style={{ minHeight: '50px', padding: '0 1rem', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
                aria-label="Vehicle make, model and year"
              />
              <input
                type="text"
                placeholder="Your Location / Address"
                required
                className={inputClass}
                style={{ minHeight: '50px', padding: '0 1rem', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
                aria-label="Your location or address"
              />
              <textarea
                placeholder="Describe the problem..."
                rows={4}
                required
                className={`${inputClass} resize-none`}
                style={{ padding: '0.75rem 1rem', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
                aria-label="Description of your vehicle problem"
              />
              <motion.button
                type="submit"
                className="w-full bg-[#FF8C00] text-[#0D0D0D] font-bold font-['Barlow_Condensed'] uppercase tracking-widest border-[3px] border-[#FFA500]"
                style={{ minHeight: '56px', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
                whileHover={{ scale: 1.02, boxShadow: '0 6px 24px rgba(255,140,0,0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                {sent ? '✅ Message Sent!' : 'Submit Request'}
              </motion.button>
            </form>
          </motion.div>

          {/* Info column — y-only animation, no horizontal drift */}
          <motion.div
            className="flex flex-col gap-4 min-w-0"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { icon: '📞', label: 'Call Bill Direct', value: '1-409-779-7780', href: 'tel:14097797780' },
              { icon: '🕐', label: 'Availability', value: '24 Hours / 7 Days a Week', href: null },
              { icon: '📍', label: 'Service Area', value: 'Southeast Texas & Southwest Louisiana', href: null },
            ].map((info) => (
              <div
                key={info.label}
                className="bg-[#1A1A1A] border border-[#2D2D2D] hover:border-[#FF8C00]/50 transition-colors flex gap-4 items-center min-w-0"
                style={{ padding: 'clamp(0.875rem, 2vw, 1.25rem)' }}
              >
                <span className="text-2xl flex-shrink-0" aria-hidden="true">{info.icon}</span>
                <div className="min-w-0 flex-1">
                  <div
                    className="font-['Barlow_Condensed'] text-[#888888] uppercase tracking-wider"
                    style={{ fontSize: '0.7rem', marginBottom: '2px' }}
                  >
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-[#FF8C00] font-bold font-['Barlow_Condensed'] tracking-wide hover:text-[#FFA500] transition-colors block"
                      style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.375rem)', lineHeight: 1.2 }}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div
                      className="text-white font-semibold"
                      style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', lineHeight: 1.3 }}
                    >
                      {info.value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Emergency call block */}
            <div className="bg-[#FF8C00] text-center" style={{ padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
              <p
                className="font-['Barlow_Condensed'] text-[#0D0D0D] font-bold uppercase tracking-wider"
                style={{ fontSize: 'clamp(0.65rem, 1vw, 0.75rem)', marginBottom: '0.25rem' }}
              >
                For Emergencies — Call Immediately
              </p>
              <a
                href="tel:14097797780"
                className="font-['Barlow_Condensed'] text-[#0D0D0D] font-bold tracking-wide block"
                style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', lineHeight: 1.2, minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
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
