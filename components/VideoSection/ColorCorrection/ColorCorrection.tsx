import styles from "./ColorCorrection.module.css";
import { motion } from "framer-motion";

import "../layout.css"

export default function ColorCorrection({ animate }: { animate: boolean }) {
  return (
    <motion.div
        initial={{
          opacity: 0,
          y: 40,
          filter: "blur(12px)",
        }}
        animate={{
          opacity: animate ? 1 : 0,
          y: animate ? 0 : 40,
          filter: animate ? "blur(0px)" : "blur(12px)",
        }}
        transition={
          animate
              ? {
                  delay: 0.35,
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }
              : {
                  delay: 0.1,
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }
          }
    >
      <section className={styles.container}>
        <h2 className={styles.text}>
          <span className={styles.primary}>Цветокоррирование.</span>{" "}
          <span className={styles.secondary}>
            Профессиональная работа
            <br />
            с материалом и авторская стилизация
          </span>
        </h2>
      </section>
    </motion.div>
  );
}