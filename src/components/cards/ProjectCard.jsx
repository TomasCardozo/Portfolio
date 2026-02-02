import Card from "@/components/common/Card";
import { useT } from "@/i18n/useT";

function Chip({ children }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

export default function ProjectCard({ project }) {
  const { t } = useT();
  const { titleKey, subtitleKey, descriptionKey, stack, highlightsKey, links } =
    project;

  return (
    <Card variant="default">
      {/* HEADER */}
      <div className="flex items-start justify-between bg-white/[0.05] border-b border-white/10 px-6 py-5">
        <div>
          <h3 className="text-lg font-semibold text-white">{t(titleKey)}</h3>
          <p className="mt-1 text-sm text-white/70">{t(subtitleKey)}</p>
        </div>

        <div className="flex gap-3">
          {links.github ? (
            <a
              className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
          ) : null}
          {links.live ? (
            <a
              className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
              href={links.live}
              target="_blank"
              rel="noreferrer"
            >
              Live →
            </a>
          ) : null}
        </div>
      </div>

      {/* BODY */}
      <div className="px-6 py-6">
        <p className="max-w-prose text-sm leading-relaxed text-white/80">
          {t(descriptionKey)}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>

        <ul className="mt-6 space-y-2 text-sm text-white/75 list-disc pl-5">
          {highlightsKey.map((h) => (
            <li key={h}>{t(h)}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
