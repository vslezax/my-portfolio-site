import styles from "./page.module.css";
import VideoSection from "../../components/VideoSection/VideoSection";
import Hero from "../../components/Hero/Hero";
import PhotoSection from "../../components/PhotoSection/PhotoSection";
import { Analytics } from "@vercel/analytics/next"

export default function HomePage() {
  return (
    <main>
      <div className={styles.heroViewport}>
        <Hero />
      </div>
      <VideoSection />
      <PhotoSection />
    </main>
  );
}