import * as motion from "motion/react-client";

const MotionTopSlide = ({children, delay = 0}) =>{
    return (
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay}}
        >
        {children}
        </motion.div>
    );
}
export default MotionTopSlide;
