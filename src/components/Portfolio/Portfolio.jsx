import { motion } from "framer-motion";
import Heading from "../Heading/Heading";
import "./Portfolio.scss";
import Project from "../Project/Project";


const Portfolio = () => {
  return (
    <motion.div className="container">
      <Heading text="Portfolio" />
      <div className="text">
        <h2>My latest work</h2>
        <p className="subtitle">
          Here are a few design projects ve worked on recently. Want to see
          more? Email me.
        </p>
      </div>

      <Project />
    </motion.div>
  );
};

export default Portfolio;
