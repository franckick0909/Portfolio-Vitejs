import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from "swiper/modules";
import "swiper/scss";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/autoplay";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpeg";
import scroll from "../../assets/img/scroll.png";
import { motion } from "framer-motion";


const Slider = () => {

    const buttonVariants = {
      animate: {
        opacity: 0,
        y: 10,
        transition: {
          duration: 2,
          repeat: Infinity,
        },
      },
  };
  
  const textVariants = {
    initial: {
      opacity: 0,
      y: "-50%",
      x: "70%",
    },
    animate: {
      opacity: 1,
      y: "-50%",
      x: "-50%",

      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
        delay: 0.4,
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const textItemVariants = {
    initial: {
      opacity: 0,
      y: "-100%",
      x: "-50%",
    },
    animate: {
      opacity: 1,
      y: "-50%",
      x: "-50%",
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
        delay: 0.4,
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };


  return (
    <div>
      <Swiper
        className="mySwiper"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        <SwiperSlide className="swiperSlide">
          <img src={img1} alt="coffee drink" className="img-swiper" />
          <motion.div
            className="text"
            variants={textVariants}
            initial="initial"
            whileInView="animate">
            <motion.h2 className="name">FRANCK CHAPELON</motion.h2>
            <motion.img
              src={scroll}
              alt="image scroll"
              className="scroll"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img2} alt="" className="img-swiper" />
          <motion.div
            className="text"
            variants={textVariants}
            initial="initial"
            whileInView="animate">
            <motion.h2 className="title1">
              FRONTEND
              <motion.span> Web</motion.span>
              <motion.span> Developer</motion.span>
            </motion.h2>
            <motion.div className="buttons" variants={textVariants}>
              <motion.a href="#contact" className="btn btn-1">
                Hire Me
              </motion.a>
              <motion.a href="#portfolio" className="btn btn-2">
                See My Work
              </motion.a>
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img3} alt="" className="img-swiper" />
          <motion.div
            className="text"
            variants={textItemVariants}
            initial="initial"
            whileInView="animate">
            <motion.h2
              className="title2">
              I Build & Design Web Interfaces.
            </motion.h2>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img4} alt="" className="img-swiper" />
          <div className="text">
            <motion.h3
              initial={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.4 }}
              whileInView={{ opacity: 1, scale: 1.4 }}>
              Im a web developer based in Dordogne, France. I have a passion for
              web design and love to create for web and mobile devices.
            </motion.h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
