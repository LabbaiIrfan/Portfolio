import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { designs } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const DesignCard = ({ index, name, description, images, link }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (images.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [images]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: index * 0.2 } }}
        >
            <div
                className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => window.open(link, "_blank")}
                role="button"
                aria-label={`View design: ${name}`}
            >
                <Tilt
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
                >
                    <div className="relative w-full">
                        <img
                            src={images[currentImageIndex]}
                            alt={`Design preview of ${name}`}
                            loading="lazy"
                            className="w-full aspect-auto rounded-2xl transition-opacity duration-700 ease-in-out"
                        />
                    </div>

                    <div className="mt-5">
                        <h3 className="text-white font-bold text-[24px]">{name}</h3>
                        <p className="mt-2 text-secondary text-[14px]">{description}</p>
                    </div>
                </Tilt>
            </div>
        </motion.div>
    );
};

const Designs = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>My Designs</p>
                <h2 className={`${styles.sectionHeadText}`}>Creative Works.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                This collection showcases my expertise in design, blending creativity and functionality. 
                Each piece reflects my attention to detail and my ability to create engaging user experiences.
            </motion.p>

            <div className="mt-16 flex flex-wrap justify-center gap-7">
                {designs.map((design, index) => (
                    <DesignCard key={`design-${index}`} index={index} {...design} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Designs, "");
