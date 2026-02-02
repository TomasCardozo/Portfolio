import Section from "@/components/common/Section";
import Card from "@/components/common/Card";
import { skills } from "@/data/skills";
import { useT } from "@/i18n/useT";

export default function Skill() {
  const { t } = useT();

  return (
    <Section
      id="skills"
      title={t("skills.title")}
      subtitle={t("skills.subtitle")}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <Card key={group.titleKey} variant="flat">
            <div className="p-6">
              <h3 className="font-semibold">{t(group.titleKey)}</h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border border-white/15
                      bg-white/5
                      px-2.5 py-1
                      text-xs text-white/80
                      hover:bg-white/10 hover:border-white/25 transition
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
