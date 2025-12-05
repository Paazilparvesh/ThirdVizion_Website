export default function ARBackgroundWrapper({ children }) {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-pink-950 min-h-screen w-full overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-black to-fuchsia-800/10 animate-pulse-slow"></div>

      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ec489955" strokeWidth="0.5" />
            </pattern>
            <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#be185d" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          <circle cx="20%" cy="30%" r="200" fill="url(#glow-gradient)" />
          <circle cx="80%" cy="70%" r="150" fill="url(#glow-gradient)" />
        </svg>
      </div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full blur-[100px] opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-400 rounded-full blur-[120px] opacity-15 animate-float-slow"></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
