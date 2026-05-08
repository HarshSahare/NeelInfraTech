import { ProjectData } from "@/app/types/projectPage";
import styles from "./project-page.module.css";
import { Company } from "@/app/lib/company";
import Link from "next/link";

interface Props {
  project: ProjectData;
  onEnquire: () => void;
}

export default function ProjectHero({ project, onEnquire }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImgPlaceholder}></div>

      <div className={styles.container}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>★ {project.hero.eyebrow}</span>

          <h1>{project.hero.title}</h1>

          <p className={styles.subtitle}>{project.hero.subtitle}</p>

          <div className={styles.heroStats}>
            {project.hero.stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <div className={styles.statNum}>{stat.number}</div>

                <div className={styles.statLbl}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.heroCtas}>
            <button
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={onEnquire}
            >
              📅 Book a Site Visit
            </button>

            <Link
              className={`${styles.btn} ${styles.btnWa}`}
              href={`https://wa.me/${Company.phone}?text=${encodeURIComponent(project.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Chat on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
