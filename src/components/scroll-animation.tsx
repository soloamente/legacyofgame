import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollAnimation = ({
  children,
  className = "",
  delay = 0,
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true /* threshold: 0.5 */ }); // Soglia migliorata
  const controls = useAnimation();
  const hasAnimated = useRef(false); // Variabile per evitare ripetizioni

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      controls.start("visible");
      hasAnimated.current = true; // Segnala che l'animazione è già avvenuta
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15, delay },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      exit="exit"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
