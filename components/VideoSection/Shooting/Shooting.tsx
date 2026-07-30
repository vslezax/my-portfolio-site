import styles from "./Shooting.module.css";
import { motion } from "framer-motion";

import "../layout.css"

export default function Shooting({ animate }: { animate: boolean }) {
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
                  delay: 0.3,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }
              : {
                  delay: 0.15,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }
        }
    >
      <section className={styles.container}>
        <h1 className={styles.text}>
        <span className={styles.primary}>Видеосъемка.</span>{" "}
          <span className={styles.secondary}>
            Полный контроль <br className={styles.mobileBreak} /> 
            съемки <br className={styles.desktopBreak} /> 
            и режиссирование проектов
          </span>
        </h1>
      </section>
    </motion.div>
  );
}