import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
            className='w-5 h-5 rounded-full bg-[#915EFF] shadow-2xl shadow-purple-600/70'
          />
          <div className='w-1 sm:h-80 h-40 violet-gradient animate-gradient' />
        </div>
        <div>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`${styles.heroHeadText} text-white animate-gradient-text`}
          >
            Hi, I'm <span className='text-[#915EFF]'>Labbai Irfan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className={`${styles.heroSubText} mt-2 text-white-100 glow-text animate-gradient-text`}
          >
            I craft efficient mobile applications, intuitive user interfaces,<br className='sm:block hidden' /> and seamless cross-platform experiences.
          </motion.p>
        </div>
      </div>
      {/* Responsive Canvas Wrapper */}
      <div className='w-full h-full'>
        <ComputersCanvas />
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <motion.div
            whileHover={{ scale: 1.2, borderColor: "#915EFF" }}
            className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:shadow-lg hover:shadow-purple-600/70 transition-all duration-300'
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
