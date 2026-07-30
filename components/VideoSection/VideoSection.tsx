"use client";

import VideoSectionText from "./VideoSectionText";
import VideoSectionTiles from "./VideoSectionTiles";
import VideoSectionButton from "./VideoSectionButton";
import styles from "./VideoSection.module.css";

import "./layout.css"

export default function VideoSection() {
    let animate = true;
    return (
        <section className={styles.container}>
            <div className={styles.VideoSectionText}>
                <VideoSectionText />
            </div>

            <div className={styles.VideoSectionTiles}>
                <VideoSectionTiles animate={animate} />
            </div>

            <div className={styles.VideoSectionButton}>
                <VideoSectionButton animate={animate} />
            </div>
        </section>
    );
}