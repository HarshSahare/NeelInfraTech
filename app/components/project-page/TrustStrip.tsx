import { TrustItem } from "@/app/types/projectPage";
import styles from "./project-page.module.css";

interface Props {
  items: TrustItem[];
}

export default function TrustStrip({ items }: Props) {
  return (
    <section className={styles.trustStrip}>
      <div className={`${styles.container} ${styles.trustRow}`}>
        {items.map((item, index) => (
          <div key={index} className={styles.trustItem}>
            <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
            {item.text}
          </div>
        ))}
      </div>
    </section>
  );
}
