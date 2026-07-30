import styles from "./PhotoSection.module.css";
import PhotoRectangle from "./PhotoRectangle/PhotoRectangle";

export default function PhotoSection() {
    return (
        <section className={styles.container}>
            <div className={styles.PhotoRectangle}>
                <PhotoRectangle />
            </div>
        </section>
    );
}