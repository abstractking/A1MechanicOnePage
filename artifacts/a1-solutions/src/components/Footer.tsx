const Footer = () => (
  <footer className="bg-[#0D0D0D] border-t-2 border-[#FF8C00]/30 py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
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
          <div className="font-['Barlow_Condensed'] text-xl text-[#FF8C00] font-bold tracking-widest uppercase">
            A1 Solutions
          </div>
          <div className="font-['Barlow_Condensed'] text-xs text-[#888888] uppercase tracking-wider">
            24 HR Mobile Mechanic
          </div>
        </div>
      </div>

      <div className="text-[#888888] text-xs text-center">
        &copy; {new Date().getFullYear()} A1 Solutions 24. All rights reserved. | Serving SE Texas &amp; SW Louisiana
      </div>

      <a
        href="tel:14097797780"
        className="font-['Barlow_Condensed'] text-[#FF8C00] font-bold tracking-wide uppercase hover:text-[#FFA500] transition-colors"
        style={{ minHeight: '44px', display: 'flex', alignItems: 'center', fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}
        aria-label="Call us at 1-409-779-7780"
      >
        📞 1-409-779-7780
      </a>
    </div>
  </footer>
);

export default Footer;
