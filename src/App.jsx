import Hero from "./componanet/2-Hero/Hero";
import Header from "./componanet/1-Header/Header";
import Main from "./componanet/3-Main/Main";
import Contact from "./componanet/4-Contact/Contact";
import Footer from "./componanet/Footer/Footer";
import { useEffect, useState } from "react";
import Skills from "./componanet/skills/Skills";

const App = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });
  const [show, setShow] = useState(false);

  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="line" />
      <Skills />
      <div className="line" />
      <Main />
      <div className="line" />
      <Contact />
      <div className="line" />
      <Footer />
      <a href="#up" style={{ opacity: show ? 1 : 0, transition: "1s" }}>
        <button className="scroll icon-circle-up"></button>
      </a>
    </div>
  );
};

export default App;
