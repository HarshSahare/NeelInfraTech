import { Feature } from "@/app/types/projectPage";
import styles from "./project-page.module.css";

interface Props {
  feature: Feature;
}

export default function FeaturesGrid({ feature }: Props) {
  return (
    <section className={`${styles.section} ${styles.features}`}>
      <div className={styles.container}>
        <div className={styles.sectionEyebrow} style={{ textAlign: "center" }}>
          Development Specifications
        </div>

        <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
          {feature.title}
        </h2>

        <p
          className={styles.sectionLead}
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {feature.description}
        </p>

        <div className={styles.featuresGrid}>
          {feature.items.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div
                className={styles.featureIcon}
                dangerouslySetInnerHTML={{
                  __html: feature.icon || "",
                }}
              />

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
