"use client";

import styles from "./Hero.module.css";
import animations from "./HeroAnimations.module.css";
import WordReveal from "./WordReveal";
import { useHeroScroll } from "./useHeroScroll";

export default function Hero() {
  const visible = useHeroScroll(0.2);

  return (
    <section className={styles.hero}>
      <video
        className={`${styles.video} ${animations.fadeIn}`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/Hero Combine 50fps.webm" type="video/webm" />
      </video>

      <div className={styles.content}>
        {/* HELLO */}
        <p className={styles.title}>
            {"HELLO!".split("").map((char, i) => (
              <span
                key={i}
                className={`${animations.letter} ${
                  visible ? animations.in : animations.out
                }`}
                style={{ "--i": i } as React.CSSProperties}
              >
                {char}
              </span>
            ))}
          </p>

          {/* TEXT */}
          <h1 className={styles.subtitle}>
            <WordReveal
              text={[
                "Видеограф и моушн дизайнер из Санкт-Петербурга.",
                "Обожаю Digital Art и стремлюсь к его превосходной реализации :)",
              ].join("\n")}
              visible={visible}
              startDelay={500}
              stagger={60}
              duration={1200}
              yOffset={20}
              blurStart={8}
            />
          </h1>
      </div>
    </section>
  );
}