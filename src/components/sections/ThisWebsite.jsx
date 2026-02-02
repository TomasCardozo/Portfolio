import Section from "@/components/common/Section";
import { useT } from "@/i18n/useT";

export default function ThisWebsite() {
  const { t } = useT();

  const stack = ["React", "Vite", "Tailwind CSS", "i18n", "GitHub Pages"];

  return (
    <Section
      id="this-website"
      title={t("thisWebsite.title")}
      subtitle={t("thisWebsite.subtitle")}
    >
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 ">
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {t("thisWebsite.cardTitle")}
          </h3>

          <a
            href="https://github.com/TomasCardozo/Portfolio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 px-4 py-2 text-sm text-white/80 hover:border-white/30 hover:text-white"
          >
            {t("thisWebsite.cta")} →
          </a>
        </div>

        <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
          {t("thisWebsite.description")}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-white/70 hover:bg-white/[0.06]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
