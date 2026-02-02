export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-3 text-sm text-white/70 max-w-2xl">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
