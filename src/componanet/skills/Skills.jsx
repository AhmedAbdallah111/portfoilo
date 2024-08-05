import "./skills.css";
const Skills = () => {
  return (
    <section id="skills" className="skill flex">
      <div className="left">
        <span>
          <i className="fa-solid fa-palette"></i>
          <h6>Designer</h6>
        </span>
        <div className="text">
          I love to create design which speaks, Keep it clean, minimal and
          simple.
          <br />
          <h3>I like to Design</h3>
          <br />
          <p>
            ● Web Design
            <br />● Mobile Apps
          </p>
          <br />
          <h3>Tools</h3>
          <br />
          <p className="pp">● Framer</p>
        </div>
      </div>
      <div className="left">
        <span>
          <i className="ko fa-solid fa-laptop-code"></i>
          <h6 className="h">Frontend Developer</h6>
        </span>
        <div className="text">
          I value business or brand for which I'm creating, thus i enjoy
          bringing new ideas to life.
          <br />
          <h3>Skills</h3>
          <br />
          <p>
            Html, Css, Js, React, Redux, Typescript, Bootstrap, Tailwind,
            Firebase etc.
          </p>
          <br />
          <h3>Tools</h3>
          <br />
          <p className="pp">VScode, Github, Some libraries animtion</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
