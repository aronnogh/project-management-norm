export function GlassBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink-960">
      {/* Warm base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(230,169,69,0.06),transparent_60%),radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(188,116,32,0.05),transparent_50%)]" />

      {/* Floating orbs */}
      <div className="absolute -left-32 top-[-5%] h-[32rem] w-[32rem] rounded-full bg-gold-500/8 blur-[140px] animate-float-slow" />
      <div className="absolute right-[-10%] top-[30%] h-[26rem] w-[26rem] rounded-full bg-amber-700/6 blur-[120px] animate-float-slower" />
      <div className="absolute bottom-[5%] left-[35%] h-[30rem] w-[30rem] rounded-full bg-gold-600/5 blur-[150px] animate-float-slow" />

      {/* Fine grain texture */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Subtle horizontal lines */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,252,248,0.5), rgba(255,252,248,0.5) 1px, transparent 1px, transparent 120px)',
        }}
      />
    </div>
  );
}
