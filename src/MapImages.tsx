import { motion } from 'framer-motion'
import { animationStart} from './assets/utils/animation'

const MapImages = () => {
  return (
    <div className="absolute w-full flex justify-between transform -translate-y-200px -z-1 overflow-hidden">
      <motion.img 
        src="src/assets/map_1.png"
        className='object-cover'
        initial={{x:-100, opacity: 0}}
        animate={{x:0, opacity: 1}}
        transition={{
            delay: animationStart + 1.2, 
            duration: 0.5,
            type: 'tween',
        }}
       />
      <motion.img 
        src="src/assets/map_2.png"
        className='object-cover'
        initial={{x:100, opacity: 0}}
        animate={{x:0, opacity: 1}}
        transition={{
            delay: animationStart + 1.2, 
            duration: 0.5,
            type: 'tween',
        }}
      />

    </div>
  )
}

export default MapImages
