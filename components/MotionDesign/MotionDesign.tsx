"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./MotionDesign.module.css";
import "./motion-layout.css";

export default function MotionDesign() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Когда 15% компонента видно
                    if (entry.intersectionRatio >= 0.3) {
                        setIsVisible(true);
                        observer.disconnect(); // Отключаем после срабатывания
                    }
                });
            },
            {
                threshold: [0.3], // 15% видимости
                rootMargin: "0px",
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className={styles.container}>
            <div 
                className={styles.glow}
                style={{ animationPlayState: isVisible ? "running" : "paused" }}
            ></div>
            <div 
                className={styles.background}
                style={{ 
                    animationPlayState: isVisible ? "running" : "paused",
                }}
            ></div>
            <div 
                className={styles.motion}
                style={{ animationPlayState: isVisible ? "running" : "paused" }}
            ></div>
            <div 
                className={styles.design}
                style={{ animationPlayState: isVisible ? "running" : "paused" }}
            ></div>
            <div 
                className={styles.laptop}
                style={{ animationPlayState: isVisible ? "running" : "paused" }}
            ></div>
            <div 
                className={styles.foreground}
                style={{ animationPlayState: isVisible ? "running" : "paused" }}
            ></div>
        </section>
    );
}