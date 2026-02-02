export default function Card({ children, variant = "default" }) {
  const variants = {
    default: `
      hover:border-white/20
      hover:bg-white/[0.05]
      hover:-translate-y-0.5
    `,
    soft: `
      hover:border-white/15
      hover:bg-white/[0.04]
    `,
    flat: `
      bg-white/[0.02]
    `,
  };

  const glowEnabled = variant === "default";

  return (
    <div
      className={`
        group relative overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        transition-all duration-300 ease-out
        ${variants[variant]}
      `}
    >
      {glowEnabled && (
        <div
          className="
            pointer-events-none absolute inset-0 z-0
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100
            bg-[radial-gradient(600px_circle_at_20%_10%,rgba(255,255,255,0.10),transparent_45%)]
          "
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
