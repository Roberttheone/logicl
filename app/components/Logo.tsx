export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, display: "inline-block" }} aria-hidden>
      <svg viewBox="0 0 100 100" className="logicl-logo" style={{ width: "100%", height: "100%" }}>
        <defs>
          <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="55%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="none" stroke="url(#lg)" strokeWidth="6" opacity="0.9" />
        <circle cx="28" cy="42" r="5" fill="url(#lg)" />
        <circle cx="72" cy="35" r="5" fill="url(#lg)" />
        <circle cx="68" cy="72" r="5" fill="url(#lg)" />
        <circle cx="35" cy="70" r="5" fill="url(#lg)" />
        <path d="M28 42 L72 35 L68 72 L35 70 Z" fill="none" stroke="rgba(229,231,235,.75)" strokeWidth="2.5" />
        <path d="M50 50 L72 35" fill="none" stroke="rgba(229,231,235,.55)" strokeWidth="2.5" />
        <path d="M50 50 L35 70" fill="none" stroke="rgba(229,231,235,.55)" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="8" fill="rgba(229,231,235,.9)" />
      </svg>
      <style jsx>{`
        .logicl-logo {
          animation: spin 18s linear infinite, hue 10s linear infinite;
          transform-origin: 50% 50%;
          filter: drop-shadow(0 8px 14px rgba(0,0,0,.35));
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes hue  { from { filter: hue-rotate(0deg) drop-shadow(0 8px 14px rgba(0,0,0,.35)); }
                          to   { filter: hue-rotate(360deg) drop-shadow(0 8px 14px rgba(0,0,0,.35)); } }
      `}</style>
    </div>
  );
}
