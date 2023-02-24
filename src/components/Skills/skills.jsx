import React from "react";
import "./skills.css";
import st from "../../assets/star.png";
import git from "../../assets/git.png";
import wf from "../../assets/webflow.png";
import fg from "../../assets/figma.png";
import wp from "../../assets/wordpress.png";
import ji from "../../assets/jira.png";
import li from "../../assets/linux.png";

const Skills = () => {
  return (
    <div id="Skills" className="container skills__container">
      <h1>My Skills:</h1>
      <div className="skills-item2">
        <div className="skill-card">
          <h3>Front-end skills</h3>
          <div className="frontend">
            <div className="skill">
              <div className="skillname">
                <img src={st} className="st" alt="" />
                <h5>Photoshop</h5>
              </div>
              <p>Intermediate</p>
            </div>
            <div className="skill">
              <div className="skillname">
                <img src={st} className="st" alt="" />
                <h5>Illustrator</h5>
              </div>
              <p>Intermediate</p>
            </div>
            <div className="skill">
              <div className="skillname">
                <img src={st} className="st" alt="" />
                <h5>Adobe XD</h5>
              </div>
              <p>Intermediate</p>
            </div>

            <div className="skill">
              <div className="skillname">
                <img src={st} className="st" alt="" />
                <h5>HTML</h5>
              </div>
              <p>Intermediate</p>
            </div>
            <div className="skill">
              <div className="skillname">
                <img src={st} className="st" alt="" />
                <h5>CSS</h5>
              </div>
              <p>Intermediate</p>
            </div>
            <div className="skill">
              <div className="skillname">
                <img src={st} className="st" alt="" />
                <h5>React JS</h5>
              </div>
              <p>Beginner</p>
            </div>
          </div>
        </div>
        <div className="skill-card">
          <h3>Backend Skills</h3>
          <div className="backend">
            <div className="skill">
              <div className="skillname">
                <img src={st} className="st" alt="" />
                <h5>JavaScript</h5>
              </div>
              <p>Intermediate</p>
            </div>
            <div className="skill">
              <div className="skillname">
                <img src={st} className="st" alt="" />
                <h5>Python</h5>
              </div>
              <p>Intermediate</p>
            </div>
            <div className="skill">
              <div className="skillname">
                <img src={st} className="st" alt="" />
                <h5>MySQL</h5>
              </div>
              <p>Intermediate</p>
            </div>
            <div className="skill">
              <div className="skillname">
                <img src={st} className="st" alt="" />
                <h5>MongoDB</h5>
              </div>
              <p>Intermediate</p>
            </div>
            <div className="skill">
              <div className="skillname">
                <img src={st} className="st" alt="" />
                <h5>Django </h5>
              </div>
              <p>Intermediate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="add-skills">
        <h3>Additional skills:</h3>
        <div className="add-skills-img">
          <img src={wp} alt="" />
          <img src={fg} alt="" />
          <img src={git} alt="" />
          <img src={ji} alt="" />
          <img src={wf} alt="" />
          <img src={li} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
