import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

// Higher Order Component to wrap sections with animations
const SectionWrapper = (Component, idName) => {
  function HOC(props) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="md:padding max-w-7xl mx-auto relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {/* Pass all props to the wrapped component */}
        <Component {...props} />
      </motion.section>
    );
  }

  // Set the display name for debugging
  HOC.displayName = `SectionWrapper(${Component.displayName || Component.name || 'Component'})`;

  return HOC;
};

export default SectionWrapper;
