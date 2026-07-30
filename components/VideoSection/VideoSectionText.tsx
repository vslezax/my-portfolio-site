"use client";
import styles from "./VideoSectionText.module.css";

import "./layout.css"

export default function VideoSectionText() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                Видеография
            </h1>

            <p className={styles.subtitle}>
                Съёмка и монтаж на профессиональное оборудование и ПО.
                <br />
                Режиссирование, соблюдение дедлайнов, ответственность и решение любых вопросов
            </p>
        </section>
    );
}