import styles from "./page.module.css";
import VideoSection from "../../components/VideoSection/VideoSection";
import Hero from "../../components/Hero/Hero";
import PhotoSection from "../../components/PhotoSection/PhotoSection";

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