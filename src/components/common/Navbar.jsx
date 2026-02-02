import { useT } from "@/i18n/useT";

export default function Navbar() {
  const { lang, setLanguage, t } = useT();

  const links = [
    { label: t("nav.links.about"), href: "#about" },
    { label: t("nav.links.experience"), href: "#experience" },
    { label: t("nav.links.skills"), href: "#skills" },
    { label: t("nav.links.projects"), href: "#projects" },
    { label: t("nav.links.this-website"), href: "#this-website" },

    { label: t("nav.links.contact"), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-semibold tracking-tight">
          Tomas<span className="text-white/60"> Cardozo</span>
        </a>

        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-white/80 hover:border-white/30 hover:text-white"
            href="https://github.com/TomasCardozo"
            target="_blank"
            rel="noreferrer"
          >
            {t("nav.github")}
          </a>

          {/* Language toggle */}
          <div className="flex items-center rounded-lg border border-white/15 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setLanguage("es")}
              className={`rounded-md px-2 py-1 text-xs font-medium transition ${
                lang === "es"
                  ? "bg-white text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-md px-2 py-1 text-xs font-medium transition ${
                lang === "en"
                  ? "bg-white text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
