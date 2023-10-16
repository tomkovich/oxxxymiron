import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

const Section = ({ children, ...rest }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 2], ["0%", "100%"]);

  return (
    <section {...rest} ref={ref}>
      <motion.div style={{ y: backgroundY }}>{children}</motion.div>
    </section>
  );
};

export default Section;
