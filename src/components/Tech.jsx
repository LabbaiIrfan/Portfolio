import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const categorizedTechnologies = {
  Languages: ["HTML 5", "CSS 3", "JavaScript", "C", "Cpp", "Python", "Java", "Dart"],
  Frameworks: ["React JS", "Flutter", "Django"],
  Libraries: ["Tailwind CSS"],
  Databases: ["Firebase", "MySQL", "MongoDB"],
  Tools: ["Git", "Figma", "Lightroom", "VS Code", "AS Code"],
  Environments: ["Node JS", "Netlify", "Vercel"],
};

const Tech = () => {
  return (
    <div className='flex flex-wrap gap-12 justify-center py-12 px-6'>
      {Object.entries(categorizedTechnologies).map(([category, techList]) => (
        <div 
          key={category} 
          className='p-8 rounded-3xl shadow-xl w-[320px] transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-[#1d1836]'
        >
          <h3 className='text-3xl font-semibold text-white mb-4 tracking-wider'>
            {category}
          </h3>
          <hr className='border-gray-500 mb-6' />
          <div className='flex flex-wrap gap-6 justify-center'>
            {technologies
              .filter((tech) => techList.includes(tech.name))
              .map((technology) => (
                <div
                  className='w-24 h-24 flex items-center justify-center bg-white rounded-2xl shadow-md transform hover:scale-110 transition-transform duration-300 hover:shadow-xl'
                  key={technology.name}
                >
                  <img 
                    src={technology.icon} 
                    alt={technology.name} 
                    className='w-16 h-16 object-contain p-2'
                  />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
