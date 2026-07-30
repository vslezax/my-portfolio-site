import styles from "./Button.module.css";
import { motion } from "framer-motion";

import "../layout.css"

export default function Button({ animate }: { animate: boolean }) {
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
                  delay: 0.45,
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }
              : {
                  delay: 0,
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }
          }
        >
            <section className={styles.container}>
                <h1 className={styles.text}>
                    Посмотреть видео
                </h1>

                <span className={styles.circle}></span>

                <svg 
                    className={styles.link}
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0.108785 4.15897C-0.0350051 4.30276 -0.0350051 4.53589 0.108785 4.67968C0.252576 4.82347 0.485706 4.82347 0.629496 4.67968L0.369141 4.41932L0.108785 4.15897ZM4.78752 0.369141C4.78752 0.16579 4.62267 0.000942469 4.41932 0.000942469H1.10554C0.902187 0.000942469 0.737339 0.16579 0.737339 0.369141C0.737339 0.572491 0.902187 0.737339 1.10554 0.737339H4.05112V3.68292C4.05112 3.88627 4.21597 4.05112 4.41932 4.05112C4.62267 4.05112 4.78752 3.88627 4.78752 3.68292V0.369141ZM0.369141 4.41932L0.629496 4.67968L4.67968 0.629496L4.41932 0.369141L4.15897 0.108785L0.108785 4.15897L0.369141 4.41932Z" fill="white"/>
                </svg>
            </section>
        </motion.div>
    );
}