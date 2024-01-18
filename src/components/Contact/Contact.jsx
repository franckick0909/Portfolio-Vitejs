import "./Contact.scss";
import { motion } from "framer-motion";
import Heading from "../Heading/Heading";

const Contact = () => {
    return (
      <motion.div className="container">
        <Heading text="Contact Me" />
        <h1>Contact</h1>
      </motion.div>
    );
};

export default Contact;