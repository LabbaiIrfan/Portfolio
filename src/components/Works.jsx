import React, { useCallback } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = React.memo(({ index, name, description, tags, image, source_code_link }) => {
  const handleSourceCodeClick = useCallback(() => {
    window.open(source_code_link, "_blank", "noopener,noreferrer");
  }, [source_code_link]);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)}>
      <Tilt
        options={{ max: 20, scale: 1.05, speed: 400 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="relative w-full h-[230px] rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={`${name} project preview`}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
          />
          <button
            onClick={handleSourceCodeClick}
            className="absolute top-3 right-3 flex items-center justify-center bg-black bg-opacity-50 w-10 h-10 rounded-full hover:bg-opacity-70 transition focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={`View ${name} source code on GitHub`}
          >
            <img src={github} alt="GitHub" className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-lg sm:text-xl">{name}</h3>
          <p className="mt-2 text-secondary text-sm">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-sm font-medium px-2 py-1 rounded-md bg-opacity-25 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
});

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Showcasing My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[15px] sm:text-base max-w-3xl leading-relaxed"
      >
        Here are some of my projects, showcasing my skills in problem-solving and different technologies.  
        Each project includes a brief description, links to code repositories, and live demos.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
