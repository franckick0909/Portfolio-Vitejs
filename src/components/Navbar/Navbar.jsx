import "./Navbar.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const animVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 10,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkTop = [
    {
      id: 1,
      name: "Hero",
      url: "#hero",
    },
    {
      id: 2,
      name: "About",
      url: "#about",
    },
    {
      id: 3,
      name: "Portfolio",
      url: "#portfolio",
    },
    {
      id: 4,
      name: "Expérience",
      url: "#experience",
    },
    {
      id: 5,
      name: "Contact",
      url: "#contact",
    },
  ];

  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 60 ? setBg(true) : setBg(false);
    });
  });

  return (
    <motion.div
      className="navbar"
      variants={animVariants}
      initial="initial"
      animate="animate">
      {linkTop.map((link) => (
        <motion.a
          href={link.url}
          key={link.id}
          className={bg ? "linktop ok" : "linktop"}
          variants={animVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}>
          {link.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Navbar;
