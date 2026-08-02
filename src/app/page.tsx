"use client";

import styles from "./page.module.css";
import VideoSection from "../../components/VideoSection/VideoSection";
import VideoSectionMobile from "../../components/VideoSection/VideoSectionMobile";
import Hero from "../../components/Hero/Hero";
import PhotoSection from "../../components/PhotoSection/PhotoSection";
import PhotoSectionMobile from "../../components/PhotoSection/PhotoSectionMobile";
import MotionDesign from "../../components/MotionDesign/MotionDesign";
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';


export default function HomePage() {
  const isMobile = useMediaQuery({ maxWidth: 639 });

  return (
    <main>
      <div className={styles.heroViewport}>
        <Hero />
      </div>
      
      {isMobile ? <VideoSectionMobile animate={true} /> : <VideoSection />}
      {isMobile ? <PhotoSectionMobile /> : <PhotoSection />}.

      <MotionDesign />
    </main>
  );
}