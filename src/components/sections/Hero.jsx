import { useT } from "@/i18n/useT";

export default function Hero() {
  const { t, lang } = useT();
  const resumeURL =
    lang === "es"
      ? `${import.meta.env.BASE_URL}cvTomas_Cardozo.pdf`
      : `${import.meta.env.BASE_URL}resumeTomas_Cardozo.pdf`;

  return (
    <main className="mx-auto w-full max-w-5xl px-6">
      {/* Scroll cue (arrow) */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="
          absolute bottom-6 left-1/2 -translate-x-1/2
          z-30
          cursor-pointer
          text-white/50
          transition hover:text-white/80
          motion-reduce:animate-none
          animate-[arrowDown_1.6s_ease-in-out_infinite]
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-15 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v14m0 0l-6-6m6 6l6-6"
          />
        </svg>
      </a>

      <section
        id="home"
        className="relative min-h-[calc(100svh-64px)] flex items-center"
      >
        <div className="w-full">
          <div className="max-w-3xl">
            <p className="text-sm text-white/70">{t("hero.location")}</p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              {t("hero.title")}
            </h1>

            <p className="mt-4 max-w-2xl text-base text-white/70 leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
              >
                {t("hero.cta.projects")}
              </a>

              <a
                href={resumeURL}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white/80 hover:border-white/30 hover:text-white"
              >
                {t("hero.cta.resume")}
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white/80 hover:border-white/30 hover:text-white"
              >
                {t("hero.cta.contact")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
