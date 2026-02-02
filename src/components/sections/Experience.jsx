import Section from "@/components/common/Section";
import ExperienceCard from "@/components/cards/ExperienceCard";
import { experience } from "@/data/experience";
import { useT } from "@/i18n/useT";

export default function Experience() {
  const { t } = useT();

  return (
    <Section
      id="experience"
      title={t("experience.title")}
      subtitle={t("experience.subtitle")}
    >
      <div className="grid gap-6">
        {experience.map((xp) => (
          <ExperienceCard key={xp.id} experience={xp} />
        ))}
      </div>
    </Section>
  );
}
