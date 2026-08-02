import styles from "./PhotoSection.module.css";
import PhotoRectangle from "./PhotoRectangle/PhotoRectangle";

import "./layout.css"

export default function PhotoSectionMobile() {
    return (
        <section className={styles.container}>
            <div className={styles.frame}>
                <div className={styles.video}>
                    <video src="/videos/photo.mp4" autoPlay loop muted playsInline />
                </div>

                <h1 className={styles.title}>
                    А ещё <br />
                    я занимаюсь <br />
                    фотографией
                </h1>

                <p className={styles.description}>
                    но совсем немного
                </p>
            </div>
        </section>
    );
}