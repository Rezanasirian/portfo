import React, { useEffect, useRef, useState } from "react";

/* Replaces react-awesome-reveal, which dragged @emotion/react into the bundle
   to do one fade-up. Adds a class the first time the element enters the
   viewport and lets CSS handle the motion.
   Unlike Fade, this wraps its children in a single element rather than one per
   child, so the wrapper is a plain div with no layout of its own. */
export default function Reveal({ children }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    /* No observer means no way to know when to reveal, so show it outright -
       failing closed here would leave the page blank. */
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal${shown ? " reveal--shown" : ""}`}>
      {children}
    </div>
  );
}
