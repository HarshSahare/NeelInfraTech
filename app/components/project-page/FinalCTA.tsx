import styles from "./project-page.module.css";

interface Props {
  title: string;
  description: string;
  whatsappLink: string;
  onEnquire: () => void;
}

export default function FinalCTA({
  title,
  description,
  whatsappLink,
  onEnquire,
}: Props) {
  return (
    <section className={`${styles.section} ${styles.finalCta}`} id="enquire">
      <div className={styles.container}>
        <h2>{title}</h2>

        <p>{description}</p>

        <div className={styles.heroCtas}>
          <button
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={onEnquire}
          >
            📅 Book a Site Visit
          </button>

          <a
            className={`${styles.btn} ${styles.btnWa}`}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
