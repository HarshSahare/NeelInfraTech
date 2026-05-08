import styles from "./project-page.module.css";

interface Props {
  about: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
  };
}

export default function AboutSection({ about }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <div>
            <span className={styles.sectionEyebrow}>{about.eyebrow}</span>

            <h2 className={styles.sectionTitle}>{about.title}</h2>

            <div
              className={styles.aboutText}
              dangerouslySetInnerHTML={{ __html: about.description }}
            ></div>
          </div>

          <img
            src={about.image}
            alt={about.title}
            className={styles.aboutImage}
          />
        </div>
      </div>
    </section>
  );
}
