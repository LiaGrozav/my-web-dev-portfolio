import React from 'react';
import './SkillsOverlay.css';
import html from "./images/html.png";
import js from "./images/js.png";
import css from "./images/css-3.png";
import nodejs from "./images/nodejs.svg";
import react from "./images/react.svg";

const SkillsOverlay = () => {
  return (
    <div className="skills overlay">
      <div>
          <img src={html} alt={"html logo"} />
        </div>
        <div>
          <img src={css} alt={"css logo"} />
        </div>
        <div>
          <img src={js} alt={"js logo"} />
        </div>
        <div>
          <img src={nodejs} alt={"node js logo"} />
        </div>
        <div>
          <img src={react} alt={"react logo"} />
        </div>
    </div>
  );
};

export default SkillsOverlay;