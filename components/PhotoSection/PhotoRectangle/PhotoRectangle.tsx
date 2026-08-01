import styles from "./PhotoRectangle.module.css";
import Button from "../Button/Button";
import Link from 'next/link';

import "../layout.css"

export default function PhotoRectangle() {
    return (
        <section className={styles.container}>
            <section className={styles.textbox}>
                <h1 className={styles.title}>
                    А ещё
                    <br />
                    я занимаюсь
                    <br />
                    фотографией
                </h1>

                <p className={styles.subtitle}>
                    но совсем немного
                </p>

                <div className={styles.button}>
                    <Link href="/photo">
                        <Button />
                    </Link>
                </div>
            </section>
        </section>
    );
}