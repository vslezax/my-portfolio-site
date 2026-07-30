import Button from "./Button/Button";
import styles from "./VideoSectionButton.module.css";

import "./layout.css"

export default function VideoSectionButton({ animate }: { animate: boolean }) {
    return (
        <section className={styles.container}>
            <div className={styles.Button}>
                <Button animate={animate}/>
            </div>
        </section>
    );
}