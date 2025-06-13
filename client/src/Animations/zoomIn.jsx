import * as motion from "motion/react-client";

const MotionZoomIn = ({ children, delay , duration = 0.5}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: duration, delay: delay || 0 }}
    >
      {children}
    </motion.div>
  );
};
export default MotionZoomIn;
