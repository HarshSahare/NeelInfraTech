import { ImageItem } from "@/app/types/projectPage";
import styles from "./project-page.module.css";

interface Props {
  gallery: {
    title: string;
    description: string;
    images: ImageItem[];
  };
}

export default function GallerySection({ gallery }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionEyebrow}>Project Gallery</div>

        <h2 className={styles.sectionTitle}>
          {gallery.title}
        </h2>

        <p className={styles.sectionLead}>
          {gallery.description}
        </p>

        <div className={styles.galleryGrid}>
          {gallery.images.map((item, index) => (
            <div key={index} className={styles.gallerySlot}>
              <img src={item.image} alt={`${item.title} ${index}`} />

              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
