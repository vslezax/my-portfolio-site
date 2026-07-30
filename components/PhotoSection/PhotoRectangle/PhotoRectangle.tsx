import styles from "./PhotoRectangle.module.css";
import Button from "../Button/Button";
import Link from 'next/link';

export default function PhotoRectangle() {
    return (
        <section className={styles.container}>
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

            <p className={styles.number}>
                02
            </p>

            <div className={styles.button}>
                <Link href="/photo">
                    <Button />
                </Link>
            </div>
        </section>
    );
}