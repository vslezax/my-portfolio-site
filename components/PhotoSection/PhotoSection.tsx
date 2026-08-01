import styles from "./PhotoSection.module.css";
import PhotoRectangle from "./PhotoRectangle/PhotoRectangle";

import "./layout.css"

export default function PhotoSection() {
    return (
        <section className={styles.container}>
            <div> <PhotoRectangle /> </div>
        </section>
    );
}