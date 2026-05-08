import styles from "./project-page.module.css";

interface DeveloperStat {
  number: string;
  label: string;
}

interface Props {
  eyebrow: string;
  title: string;
  description: string;

  stats: DeveloperStat[];
}

export default function DeveloperSection({
  eyebrow,
  title,
  description,
  stats,
}: Props) {
  return (
    <section className={`${styles.section} ${styles.developer}`}>
      <div className={styles.container}>
        <div className={styles.sectionEyebrow}>{eyebrow}</div>

        <h2 className={styles.sectionTitle}>{title}</h2>

        <p>{description}</p>

        <div className={styles.developerStats}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.devStat}>
              <div className={styles.devStatNum}>{stat.number}</div>

              <div className={styles.devStatLbl}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
