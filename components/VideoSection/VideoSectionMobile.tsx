import styles from "./VideoSectionMobile.module.css";

import "./layout.css"

export default function VideoSectionMobile({ animate }: { animate: boolean }) {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                Видеография
            </h1>

            <p className={styles.subtitle}>
                Съёмка и монтаж на профессиональное оборудование и ПО.
                Режиссирование, соблюдение дедлайнов, ответственность и решение любых вопросов
            </p>

            <div className={styles.rectangle}>
                <h2 className={styles.text_two_lines}>
                    <span className={styles.primary}>Видеосъемка.</span>{" "}
                    <span className={styles.secondary}>
                        Полный контроль съемки и режиссирование проектов
                    </span>
                </h2>
            </div>

            <div className={styles.rectangle}>
                <h2 className={styles.text_rectangle}>
                    <span className={styles.primary}>Цветокоррирование.</span>{" "}
                    <span className={styles.secondary}>
                        Профессиональная работа с материалом и авторская стилизация
                    </span>
                </h2>
            </div>

            <div className={styles.rectangle}>
                <h2 className={styles.text_rectangle}>
                    <span className={styles.primary}>Монтаж.</span>{" "}
                    <span className={styles.secondary}>
                        Полный цикл препродакшна <br /> и постпродакшна, реализация любого типа роликов
                    </span>
                </h2>
            </div>

            <div className={styles.rectangle}>
                <h2 className={styles.text_two_lines}>
                    <span className={styles.primary}>Саунд-дизайн.</span>{" "}
                    <span className={styles.secondary}>
                        Добавление аудио акцентов для приятного просмотра
                    </span>
                </h2>
            </div>
        </section>
    );
}