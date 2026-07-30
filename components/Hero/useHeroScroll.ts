"use client";

import { useEffect, useState } from "react";

export function useHeroScroll(thresholdVH = 0.5) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = document.querySelector("section");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: `-${100 - thresholdVH * 100}% 0px -${100 - thresholdVH * 100}% 0px`,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [thresholdVH]);

  return visible;
}