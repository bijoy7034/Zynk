import * as motion from "motion/react-client";

const MotionLeftSlide = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay : delay }}
    >
      {children}
    </motion.div>
  );
};
export default MotionLeftSlide;
