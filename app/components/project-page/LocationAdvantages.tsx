import styles from "./project-page.module.css";

interface Props {
  location: {
    title: string;
    mapImage?: string;

    items: {
      place: string;
      distance: string;
      icon?: string;
    }[];
  };
}

export default function LocationAdvantages({ location }: Props) {
  return (
    <section className={`${styles.section} ${styles.locations}`}>
      <div className={styles.container}>
        <div className={styles.sectionEyebrow}>Strategic Connectivity</div>

        <h2 className={styles.sectionTitle}>{location.title}</h2>

        <div className={styles.locationGrid}>
          <div className={styles.mapPlaceholder}>
            {location.mapImage ? (
              <img src={location.mapImage} alt="Location Map" />
            ) : (
              <span>📍 ADD LOCATION MAP / MASTER PLAN</span>
            )}
          </div>

          <ul className={styles.distanceList}>
            {location.items.map((item, index) => (
              <li key={index}>
                <div className={styles.place}>
                  <div
                    className={styles.pin}
                    dangerouslySetInnerHTML={{
                      __html:
                        item.icon ||
                        `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/></svg>`,
                    }}
                  />

                  <span>{item.place}</span>
                </div>

                <div className={styles.dist}>{item.distance}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
