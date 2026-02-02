import Section from "@/components/common/Section";
import Card from "@/components/common/Card";
import { useT } from "@/i18n/useT";

export default function About() {
  const { t } = useT();

  return (
    <Section id="about" title={t("about.title")} subtitle={t("about.subtitle")}>
      <Card variant="flat">
        <div className="p-6 text-white/75 space-y-4">
          {t("about.content")
            .split("\n\n")
            .map((parrafo, i) => (
              <p key={i}>{parrafo}</p>
            ))}
        </div>
      </Card>
    </Section>
  );
}
