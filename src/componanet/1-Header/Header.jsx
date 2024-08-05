import { useEffect, useState } from "react";
import "../1-Header/header.css";
const Header = () => {
  const [show, setShow] = useState(false);
  const [light, setLight] = useState(localStorage.getItem("mode") ?? "dark");
  useEffect(() => {
    if (light === "Light") {
      document.body.classList.remove("dark");
      document.body.classList.add("Light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("Light");
    }
  }, [light]);
  return (
    <>
      <header className="flex">
        <button
          onClick={() => {
            setShow(true);
          }}
          className="menu icon-menu flex"
        ></button>
        <div className="samy">
          <span>S E M O</span>{" "}
        </div>
        <nav>
          <ul className="flex">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">skills</a>
            </li>
            <li>
              <a href="#main">portfolio</a>
            </li>

            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
            localStorage.setItem("mode", light === "dark" ? "Light" : "dark");
            setLight(localStorage.getItem("mode"));
          }}
          className="mode flex"
        >
          {light === "dark" ? (
            <span className="icon-moon-o"></span>
          ) : (
            <span className="icon-wb_sunny"></span>
          )}
        </button>
        {show && (
          <div className="fixed">
            <ul className="model">
              <li>
                <button
                  className="icon-close"
                  onClick={() => {
                    setShow(false);
                  }}
                ></button>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#main">portfolio</a>
              </li>

              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
