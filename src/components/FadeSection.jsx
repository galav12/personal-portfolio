import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const FadeSection = ({ children, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, pointerEvents: "auto" });
    } else {
      controls.start({ opacity: 0, y: 20, pointerEvents: "none" });
    }
  }, [controls, inView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 20, pointerEvents: "none" }}
      animate={controls}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="relative h-dvh snap-start flex flex-col items-center justify-center px-4"
    >
      {children}
    </motion.section>
  );
};
