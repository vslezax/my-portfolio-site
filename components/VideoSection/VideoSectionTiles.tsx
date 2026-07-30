"use client";

import Shooting from "./Shooting/Shooting";
import SoundDesign from "./SoundDesign/SoundDesign";
import Montage from "./Montage/Montage";
import ColorCorrection from "./ColorCorrection/ColorCorrection";
import styles from "./VideoSectionTiles.module.css";

import "./layout.css"

export default function VideoSectionTiles({ animate }: { animate: boolean }) {
    return (
        <section className={styles.container}>
            <div className={styles.ShootingControl}>
                <Shooting animate={animate}/>
            </div>

            <div className={styles.SoundDesignControl}>
                <SoundDesign animate={animate} />
            </div>

            <div className={styles.MontageControl}>
                <Montage animate={animate} />
            </div>

            <div className={styles.ColorControl}>
                <ColorCorrection animate={animate} />
            </div>
        </section>
    );
}