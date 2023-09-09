import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiJirasoftware,
  SiGit,
  SiTailwindcss,
  SiNetlify
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React js</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiJirasoftware />
            <h5>Jira</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Tailwind CSS</h5>
          </div>
          <div>
            <SiMaterialui />
            <h5>Material Ui</h5>
          </div>
          <div>
            <SiGit />
            <h5>Git</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
