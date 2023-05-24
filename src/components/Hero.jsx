import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Sky
          </span></h1>
          <h2 className={`${styles.heroSubText} mt-2 text-white-100 flex`}>
            I'm a Junior <p className="sm:block hidden">&nbsp;FullStack Web&nbsp;</p> Developer
          </h2>

        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-8 bottom-30.5 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[20px] h-[35px] rounded-3xl border-2 border-secondary flex justify-center items-start p-1'>
            <motion.div 
              animate={{
                y: [0, 12, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2.5 h-2.5 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;