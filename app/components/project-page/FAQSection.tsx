import { FAQItem } from "@/app/types/projectPage";
import styles from "./project-page.module.css";

interface Props {
  faq: FAQItem[];
}

export default function FAQSection({ faq }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionEyebrow} style={{ textAlign: "center" }}>
          Frequently Asked Questions
        </div>
        <h2
          className={styles.sectionTitle}
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          Everything You Need to Know
        </h2>

        <div className={styles.faqList}>
          {faq.map((item, index) => (
            <details key={index} className={styles.faqItem}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
