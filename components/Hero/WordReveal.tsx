"use client";

import React, { useMemo } from "react";
import styles from "./WordReveal.module.css";

type Props = {
  text: string;
  visible: boolean;

  startDelay?: number;
  stagger?: number;
  duration?: number;

  yOffset?: number;
  blurStart?: number;
};

export default function WordReveal({
  text,
  visible,

  startDelay = 300,
  stagger = 50,
  duration = 1000,

  yOffset = 20,
  blurStart = 8,
}: Props) {
  const tokens = useMemo(() => {
    const lines = text.split("\n");
    const result: { type: "word" | "br"; value?: string; key: string }[] = [];

    let i = 0;

    lines.forEach((line, li) => {
      const words = line.trim().split(/\s+/).filter(Boolean);

      words.forEach((w) => {
        result.push({
          type: "word",
          value: w,
          key: `w-${li}-${i++}`,
        });
      });

      if (li !== lines.length - 1) {
        result.push({ type: "br", key: `br-${li}` });
      }
    });

    return result;
  }, [text]);

  let index = 0;

  return (
    <span className={`${styles.wrapper} ${visible ? styles.in : styles.out}`}>
      {tokens.map((t) => {
          if (t.type === "br") return <br key={t.key} />;

          const i = index++;

          return (
              <React.Fragment key={t.key}>
                  <span
                      className={styles.word}
                      style={{
                          "--delay": `${startDelay + i * stagger}ms`,
                          "--duration": `${duration}ms`,
                          "--y": `${yOffset}px`,
                          "--blur": `${blurStart}px`,
                      } as React.CSSProperties}
                  >
                      {t.value}
                  </span>

                  {" "}
              </React.Fragment>
          );
      })}
    </span>
  );
}