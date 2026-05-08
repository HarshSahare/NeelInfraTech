import { Company } from "@/app/lib/company";
import styles from "./project-page.module.css";
import Link from "next/link";

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

          <Link
            className={`${styles.btn} ${styles.btnWa}`}
            href={`https://wa.me/${Company.phone}?text=${encodeURIComponent(whatsappLink)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Chat on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
