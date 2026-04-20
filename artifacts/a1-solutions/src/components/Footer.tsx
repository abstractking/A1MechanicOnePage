const Footer = () => (
  <footer className="bg-[#0D0D0D] border-t-2 border-[#FF8C00]/30" style={{ padding: 'clamp(2rem, 4vw, 3rem) 0' }}>
    <div
      className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ padding: '0 clamp(1rem, 5vw, 2rem)' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <span
          className="text-3xl gear-bg"
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
        <div>
          <div className="font-['Barlow_Condensed'] text-lg text-[#FF8C00] font-bold tracking-widest uppercase leading-none">
            A1 Solutions 24
          </div>
          <div className="font-['Barlow_Condensed'] text-[10px] text-[#888888] uppercase tracking-wider">
            24 HR Mobile Mechanic
          </div>
        </div>
      </div>

      {/* Copyright — wraps naturally */}
      <div className="text-[#888888] text-center" style={{ fontSize: 'clamp(0.65rem, 1vw, 0.75rem)' }}>
        &copy; {new Date().getFullYear()} A1 Solutions 24. All rights reserved.
        <span className="hidden sm:inline"> | Serving SE Texas &amp; SW Louisiana</span>
      </div>

      {/* Phone — always fits */}
      <a
        href="tel:14097797780"
        className="font-['Barlow_Condensed'] text-[#FF8C00] font-bold tracking-wide uppercase hover:text-[#FFA500] transition-colors flex items-center gap-2 flex-shrink-0"
        style={{ minHeight: '44px', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
        aria-label="Call us at 1-409-779-7780"
      >
        <span aria-hidden="true">📞</span>
        <span>1-409-779-7780</span>
      </a>
    </div>
  </footer>
);

export default Footer;
