import "./Skills.scss";
import css from "../../assets/icon/css3.png";
import html from "../../assets/icon/html5.png";
import js from "../../assets/icon/js.png";
import react from "../../assets/icon/reactjs.png";
import sass from "../../assets/icon/sass.png";
import figma from "../../assets/icon/figma.png";
import git from "../../assets/icon/git.png";
import nextjs from "../../assets/icon/nextjs.png";
import { motion } from "framer-motion";

const Skills = () => {
  const headingVariants = {
    initial: {
      opacity: 0.1,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 50,
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  const imgVariants = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="skills-container">
      <h1 className="title">Skills</h1>
      <motion.div
        className="content"
        variants={headingVariants}
        initial="initial"
        animate="animate">
        <motion.div
          className="content-skills"
          variants={imgVariants}
          initial="hidden"
          whileInView="visible">
          <motion.div className="content__item" variants={imgVariants}>
            <motion.img
              src={html}
              alt=""
              className="imgskills"
              whileHover={{ scale: 1.3 }}
            />
            <motion.p className="text">HTML5</motion.p>
          </motion.div>
          <motion.div className="content__item" variants={imgVariants}>
            <motion.img
              src={css}
              alt=""
              className="imgskills"
              whileHover={{ scale: 1.3 }}
            />
            <motion.p className="text">CSS3</motion.p>
          </motion.div>
          <motion.div className="content__item" variants={imgVariants}>
            <motion.img
              src={js}
              alt=""
              className="imgskills"
              whileHover={{ scale: 1.3 }}
            />
            <motion.p className="text">JavaScript</motion.p>
          </motion.div>
          <motion.div className="content__item" variants={imgVariants}>
            <motion.img
              src={sass}
              alt=""
              className="imgskills"
              whileHover={{ scale: 1.3 }}
            />
            <motion.p className="text">Sass</motion.p>
          </motion.div>
          <motion.div className="content__item" variants={imgVariants}>
            <motion.img
              src={git}
              alt=""
              className="imgskills"
              whileHover={{ scale: 1.3 }}
            />
            <motion.p className="text">Git</motion.p>
          </motion.div>
          <motion.div className="content__item" variants={imgVariants}>
            <motion.img
              src={nextjs}
              alt=""
              className="imgskills"
              whileHover={{ scale: 1.3 }}
            />
            <motion.p className="text">NextJs</motion.p>
          </motion.div>
          <motion.div className="content__item" variants={imgVariants}>
            <motion.img
              src={figma}
              alt=""
              className="imgskills"
              whileHover={{ scale: 1.3 }}
            />
            <motion.p className="text">Figma</motion.p>
          </motion.div>
          <motion.div className="content__item" variants={imgVariants}>
            <motion.img
              src={react}
              alt=""
              className="imgskills"
              whileHover={{ scale: 1.3 }}
            />
            <motion.p className="text">React</motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
