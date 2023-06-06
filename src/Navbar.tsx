import Logo from "./Logo"
import ArrowRight from "./ArrowRight"
import { motion } from "framer-motion"
import { animationStart, reveal } from "./assets/utils/animation"

function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: animationStart }}
    >
      <motion.div
        className="w-full flex items-center justify-around h-80px fixed top-0 bg-white z-100"
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          staggerChildren: 0.1,
          duration: 0.5,
          delayChildren: animationStart + 0.5,
        }}
      >
        <motion.div variants={reveal}>
          <Logo />
        </motion.div>

        <div className="flex gap-20px items-center <md:hidden">
          <motion.span variants={reveal} className="cursor-pointer">
            Solutions
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer">
            Courses
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer">
            Resources
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer">
            About
          </motion.span>
        </div>

        <motion.div
          variants={reveal}
          className="flex gap-5px items-center cursor-pointer"
        >
          <span className="mb-3px">Sign In</span>
          <ArrowRight />

        </motion.div>

      </motion.div>

    </motion.div>
  );
}

export default Navbar;