import { useState, useEffect, useRef } from "react";

export function useNearScreen({ distance = "100px" }) {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setIsNearScreen(true);
        observer.disconnect();
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      observer.observe(fromRef.current);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
