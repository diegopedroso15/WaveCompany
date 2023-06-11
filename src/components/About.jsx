import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServicesCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 25,
            scale: 1,
            speed: 500,
          }}
          className="bg-tertiary py-5 px-12 min-h-[280px] flex justify-evenly items-center rounded-[20px] flex-col"
        >
          <img src={icon} alt={title} 
          className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 mb-[2.5rem] text-secondary text-[17px] max-w-3x1 leadeing-[30px]"
      >
        Somos uma consultoria de TI renomada e especializada em software, focada em fornecer soluções personalizadas e desenvolvimento de software sob medida. Com uma equipe altamente qualificada e um histórico comprovado de satisfação do cliente, nos dedicamos a entender as necessidades únicas de cada negócio, entregando soluções de TI de alta qualidade que impulsionam o crescimento e o sucesso dos nossos clientes. Nos orgulhamos de nossa reputação de confiança e profissionalismo, sempre buscando superar as expectativas.
      </motion.p>

      <div className="mt-2 flex flex-wrap gap-10">
        {services.map((service, index) => ( 
          <ServicesCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
