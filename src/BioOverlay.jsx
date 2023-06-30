import React, { useState } from "react";
import "./BioOverlay.css";

const BioOverlay = () => {
  const [highlighted, setHighlighted] = useState(false);

  const handleHighlightAnimationEnd = () => {
    setHighlighted(true);
  };

  return (
    <div className="bio overlay">
      <h3>Who am I?</h3>
      <p>
        I am passionate and{" "}
        <span
          className={`highlight ${highlighted ? "highlighted" : ""}`}
          onAnimationEnd={handleHighlightAnimationEnd}
        >
          eager to learn
        </span>{" "}
        Frontend Developer.
      </p>
      <p>
        I am also a{" "}
        <span
          className={`highlight ${highlighted ? "highlighted" : ""}`}
          onAnimationEnd={handleHighlightAnimationEnd}
        >
          project manager
        </span>{" "}
        with 3+ years of experience in successfully coordinating projects in a
        multicultural environment.
      </p>
      <p>
        As a{" "}
        <span
          className={`highlight ${highlighted ? "highlighted" : ""}`}
          onAnimationEnd={handleHighlightAnimationEnd}
        >
          Scrum Master
        </span>{" "}
        and former{" "}
        <span
          className={`highlight ${highlighted ? "highlighted" : ""}`}
          onAnimationEnd={handleHighlightAnimationEnd}
        >
          Project Manager
        </span>
        , I bring a unique perspective to the frontend developer role. I
        understand the importance of clear{" "}
        <span
          className={`highlight ${highlighted ? "highlighted" : ""}`}
          onAnimationEnd={handleHighlightAnimationEnd}
        >
          communication
        </span>{" "}
        and{" "}
        <span
          className={`highlight ${highlighted ? "highlighted" : ""}`}
          onAnimationEnd={handleHighlightAnimationEnd}
        >
          collaboration
        </span>{" "}
        and I am able to bridge the gap between the technical and non-technical
        teams.
      </p>
      <p>
        I am also an experienced translator with strong customer service and
        communication skills. I live the{" "}
        <span
          className={`highlight ${highlighted ? "highlighted" : ""}`}
          onAnimationEnd={handleHighlightAnimationEnd}
        >
          Scrum
        </span>{" "}
        (Agile) values of commitment, focus, respect, openness, and courage and
        I believe these to be essential for my work ethic.
      </p>
      <p>
        Apart from programming languages, I'm also passionate about{" "}
        <span
          className={`highlight ${highlighted ? "highlighted" : ""}`}
          onAnimationEnd={handleHighlightAnimationEnd}
        >
          human languages
        </span>{" "}
        and I believe that a language is a powerful tool that helps us connect
        and{" "}
        <span
          className={`highlight ${highlighted ? "highlighted" : ""}`}
          onAnimationEnd={handleHighlightAnimationEnd}
        >
          understand each other
        </span>{" "}
        better. I'm constantly learning new languages and exploring different
        cultures.
      </p>
      <p>
        I have recently completed a one year{" "}
        <span
          className={`highlight ${highlighted ? "highlighted" : ""}`}
          onAnimationEnd={handleHighlightAnimationEnd}
        >
          full stack
        </span>{" "}
        web development course, and I am excited to take my experience to the
        next level{" "}
        <span role="img" aria-label="celebration-emoji">
          &#128171;
        </span>
      </p>
    </div>
  );
};

export default BioOverlay;
