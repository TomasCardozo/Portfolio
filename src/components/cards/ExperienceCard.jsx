import Card from "@/components/common/Card";
import { useT } from "@/i18n/useT";

export default function ExperienceCard({ experience }) {
  const { t } = useT();
  const { companyKey, roleKey, periodKey, typeKey, bulletsKey, link } =
    experience;

  return (
    <Card variant="soft">
      {/* HEADER */}
      <div className="flex items-start justify-between border-b border-white/10 px-6 py-5">
        <div>
          <h3 className="text-lg font-semibold text-white">{t(companyKey)}</h3>
          <p className="mt-1 text-sm text-white/70">
            {t(roleKey)} · {t(typeKey)} · {t(periodKey)}
          </p>
        </div>

        {link ? (
          <a
            className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Website →
          </a>
        ) : null}
      </div>

      {/* BODY */}
      <div className="px-6 py-6">
        <ul className="mt-4 space-y-2 text-sm text-white/75 list-disc pl-5">
          {bulletsKey.map((k) => (
            <li key={k}>{t(k)}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
