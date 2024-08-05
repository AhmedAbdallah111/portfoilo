import "./hero.css";
import devAnimation from "../../../public/animation/dev.json";
import Lottie from "lottie-react";

// @ts-ignore
import avatar from "../../../public/1photo.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section id="about" className="hero flex">
      <div className="left-sec">
        <div className="parent-avatar flex">
          <img src={avatar} className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">Front-End Developer </h1>
        <motion.p
          className="subTitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          Hi, I'm Sami Awad
          <br />
          I'm a front-end developer based in Egypt. I love building simple and
          beautiful websites with great user experience. I'm interested in the
          entire front-end stack like trying new things and building awesome
          projects. I'm always looking for new development and creative
          challenges and I'm a fast learner. I believe that everything is an art
          when you put your mind to it. You can connect with me via social
          links.
        </motion.p>
        <div className="social flex">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100011222117654"
              className="icon icon-facebook-f"
            ></a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/samy_4wad/"
              className="icon icon-instagram"
            ></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/samy-awad-58a0b1313/"
              className="icon icon-linkedin"
            ></a>
          </li>
          <li>
            <a
              href="https://github.com/AhmedAbdallah111"
              className="icon icon-github1"
            ></a>
          </li>
        </div>
      </div>
      <div className="right-sec animation ">
        <Lottie
          className="contact"
          style={{ width: "30rem" }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
