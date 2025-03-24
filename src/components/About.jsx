import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
I'm a passionate software developer with a talent for crafting intuitive and high-performance mobile applications. I excel at turning ideas into impactful digital experiences through clean code and innovative design. With a strong focus on scalability and user satisfaction, I’m dedicated to delivering solutions that make a difference. Let's work together to bring your vision to life!
      </motion.p>
      {/* Resume Button */}
<motion.div variants={fadeIn("", "", 0.2, 1)} className="mt-8">
  <a
    href="https://drive.google.com/file/d/1IZ2gMVp9ymxx1lB28-gLci23Ad-3zQmb/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block p-[2px] rounded-[20px] shadow-xl transform transition-transform duration-300 hover:scale-105"
  >
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[20px] py-2 px-8 text-white text-[20px] font-bold text-center backdrop-blur-md bg-opacity-70 hover:shadow-2xl hover:from-cyan-500 hover:to-blue-500 transition-colors duration-300">
      View Resume
    </div>
  </a>
</motion.div>




      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
