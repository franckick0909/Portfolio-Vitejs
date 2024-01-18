import "./Experience.scss";
import { motion } from "framer-motion";
import Heading from "../Heading/Heading";

const Experience = () => {
    return (
      <motion.div className="container">
        <Heading text="My Experience" />
        <h1>Experience</h1>
      </motion.div>
    );
};

export default Experience;