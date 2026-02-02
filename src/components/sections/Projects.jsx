import Section from "@/components/common/Section";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";
import { useT } from "@/i18n/useT";

export default function Projects() {
  const { t } = useT();
  return (
    <Section
      id="projects"
      title={t("projects.title")}
      subtitle={t("projects.subtitle")}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} subtitle={p.subtitleKey} project={p} />
        ))}
      </div>
    </Section>
  );
}
