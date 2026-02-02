import Section from "@/components/common/Section";
import { useT } from "@/i18n/useT";

export default function About() {
  const { t } = useT();
  return (
    <Section
      id="contact"
      title={t("contact.title")}
      subtitle={t("contact.subtitle")}
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-white/75">
          {t("contact.email")}{" "}
          <a
            className="text-white underline"
            href="mailto:tomascardozo.0023@gmail.com"
          >
            tomascardozo.0023@gmail.com
          </a>
        </p>
        <p className="mt-3 text-white/75">
          {t("contact.linkedin")}{" "}
          <a
            className="text-white underline"
            href="https://www.linkedin.com/in/tomas-cardozo"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p className="mt-3 text-white/75">
          {t("contact.github")}{" "}
          <a
            className="text-white underline"
            href="https://github.com/tomascardozo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </Section>
  );
}
