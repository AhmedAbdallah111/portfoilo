// @ts-nocheck
import { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
const project = [
  {
    titleProject: "The Fit Club",
    catgroy: "react",
    imgPath: "/animation/ass/gum.png",
    sub: "In here we will help you to shape and build your ideal body and live up your life to fullest",
    path: "https://fit-club-7c9e1.web.app/",
  },
  {
    titleProject: "Foodera",
    catgroy: "react",
    imgPath: "/animation/ass/food.png",
    sub: "Good food choices are good investments and We pride ourselves on making real food from the best ingredients.",
    path: "https://foodera-e0381.firebaseapp.com/",
  },
  {
    titleProject: "Furni.shop",
    catgroy: "javascript",
    imgPath: "/animation/ass/furn.png",
    sub: "We will help you to make an elegant and luxurious interior designed by professional interior designer.",
    path: "https://ahmedabdallah111.github.io/furni.shop/",
  },
  {
    titleProject: "King's-Food",
    catgroy: "redux",
    imgPath: "/animation/ass/rus.png",
    sub: "Good food choices are good investments and We pride ourselves on making real food from the best ingredients.",
    path: "https://restaurant-king-s.firebaseapp.com/",
  },
  {
    titleProject: "Spotify-mini",
    catgroy: "react",
    imgPath: "/animation/ass/2024-07-31 (1).png",
    sub: " Try 1 month of Premium Individual for free is adigital music service that gives you access to millions of songs",
    path: "https://ahmedabdallah111.github.io/Spotify/",
  },
  {
    titleProject: "Hedma-Store",
    catgroy: "css",
    imgPath: "/animation/ass/hedma.png",
    sub: "Trade-in-offer Super value deals On all products Save more with coupons & up to 70% off!  t-Shirts & Accessories",
    path: "https://ahmedabdallah111.github.io/Hedma-Store/",
  },
  {
    titleProject: "Dashboard",
    catgroy: "css",
    imgPath: "/animation/ass/dashbord.png",
    sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perferendis sint sapiente tempore explicabo?",
    path: "https://ahmedabdallah111.github.io/Project-num-4/index.html",
  },
  {
    titleProject: "Guess The Word",
    catgroy: "javascript",
    imgPath: "/animation/ass/play.png",
    sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perferendis sint sapiente tempore explicabo?",
    path: "https://ahmedabdallah111.github.io/play-guesse-word/",
  },
  {
    titleProject: "Semo Groub",
    catgroy: "css",
    imgPath: "/animation/ass/semo.png",
    sub: "Here Iam gonna share everything about my life. Books Iam reading Games Iam Playing Stories and Events",
    path: "https://ahmedabdallah111.github.io/desgin/",
  },
  {
    titleProject: "Kaspar",
    catgroy: "css",
    imgPath: "/animation/ass/ksbar.png",
    sub: "Hallo World! We Are group Semo We Make Art,OUR DESGIN COMES WITH.. GROUP SEMO AWAD..",
    path: "https://ahmedabdallah111.github.io/desgin2/",
  },
];
const Main = () => {
  const [active, setActive] = useState("all");
  const [arr, setArr] = useState(project);
  // @ts-ignore
  return (
    <main id="main" className="flex">
      <section className="flex left-sect">
        <button
          onClick={() => {
            setActive("all");
            setArr(project);
          }}
          className={active === "all" ? "active" : null}
        >
          All Project
        </button>

        <button
          onClick={() => {
            setActive("css");
            const myArr = project.filter((item) => {
              return item.catgroy == "css";
            });
            setArr(myArr);
          }}
          className={active === "css" ? "active" : null}
        >
          HTML && CSS
        </button>
        <button
          onClick={() => {
            setActive("java");
            const myArr = project.filter((item) => {
              return item.catgroy == "javascript";
            });
            setArr(myArr);
          }}
          className={active === "java" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            setActive("react");
            const myArr = project.filter((item) => {
              return item.catgroy == "react";
            });
            setArr(myArr);
          }}
          className={active === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            setActive("redux");
            const myArr = project.filter((item) => {
              return item.catgroy == "redux";
            });
            setArr(myArr);
          }}
          className={active === "redux" ? "active" : null}
        >
          React && Redux
        </button>
      </section>
      <section className="flex right-sect">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                // @ts-ignore
                key={item}
                className="card"
              >
                <img src={item.imgPath} alt="" className="photo" />
                <div className="box">
                  <h3 className="title">{item.titleProject}</h3>
                  <p className="sub">{item.sub}</p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a href={item.path} className="icon-link"></a>
                      <a
                        href="https://github.com/AhmedAbdallah111"
                        className="icon-github1"
                      ></a>
                    </div>
                    <a
                      className="more flex"
                      style={{ marginTop: "5px" }}
                      href={item.path}
                    >
                      More{" "}
                      <span
                        style={{ alignSelf: "center" }}
                        className="icon-arrow-right2"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
