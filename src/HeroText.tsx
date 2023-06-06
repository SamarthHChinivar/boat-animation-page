import Compass from "./Compass"
import {motion} from 'framer-motion'
import {animationStart, reveal} from './assets/utils/animation'

const HeroText = () => {
  return (
    <motion.div 
        className="flex flex-col items-center text-center"
        layout
        initial={{height: 0}}
        animate={{height: 'unset'}}
        transition={{delay: animationStart, duration: 1}}
    >
      <motion.div 
        className="flex flex-col text-3vw <md:text-24px font-bold mb-30px pt-100px"
        variants={reveal}
        initial='hiddenVariant'
        animate='revealedVariant'
        transition={{delay: animationStart + 1, duration: 0.5}}
      >
        <span className="flex items-center gap-10px">Delivering <Compass/> Industry's</span>
        <span>Top Tallent's Work</span>
      </motion.div>

      <span className="mb-30px w-1/4 <lg:w-1/3 <md:w-1/2 text-14px leading-tight">
        VR Headset warable network effect. Hypergrowth activist investor.
        Substack blogging thiel fellow dropout. Alexis ohanian tweeted overhyped
        ed-tech series.
      </span>
    </motion.div>
  )
}

export default HeroText