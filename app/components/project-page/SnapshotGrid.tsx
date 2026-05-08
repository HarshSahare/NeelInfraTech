import { SnapshotItem } from "@/app/types/projectPage";
import styles from "./project-page.module.css";

interface Props {
  snapshot: SnapshotItem[];
}

export default function SnapshotGrid({ snapshot }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionEyebrow}>Project Snapshot</div>

        <h2 className={styles.sectionTitle}>Vrindavan Park 12 at a Glance</h2>

        <div className={styles.snapshotGrid}>
          {snapshot.map((item, index) => (
            <div key={index} className={styles.snapCell}>
              <div className={styles.snapLbl}>{item.label}</div>

              <div className={styles.snapVal}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
