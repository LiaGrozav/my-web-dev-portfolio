import React, { useEffect, useState } from "react";
import "./HomePage.css";
import woman from "./images/woman.jpg";
import BioOverlay from "./BioOverlay";
import ProjectsOverlay from "./ProjectsOverlay";
import SkillsOverlay from "./SkillsOverlay";
import ContactForm from "./ContactForm";

const HomePage = () => {
  useEffect(() => {
    document.body.classList.add("show-homepage");
    return () => {
      document.body.classList.remove("show-homepage");
    };
  }, []);

  const [activeCorner, setActiveCorner] = useState(null);
  const [isEditingContactForm, setIsEditingContactForm] = useState(false);
  const [contactFormData, setContactFormData] = useState(null);
  const [isProjectsOverlayOpen, setIsProjectsOverlayOpen] = useState(false);
  const [isBottomLeftOpen, setIsBottomLeftOpen] = useState(false);
  const [isBottomRightClicked, setIsBottomRightClicked] = useState(false);

  const handleCornerHover = (corner) => {
    setActiveCorner(corner);

    if (corner === "bottom-left") {
      setIsProjectsOverlayOpen(true);
    }
  };

  const handleCornerLeave = () => {
    setActiveCorner(null);

    if (isBottomLeftOpen) {
      setIsProjectsOverlayOpen(false);
    }

    if (!isBottomRightClicked) {
      setIsEditingContactForm(false);
    }
  };

  const handleClickContact = () => {
    setIsBottomRightClicked(!isBottomRightClicked);
    setIsEditingContactForm(true);
  };

  const handleCloseContactForm = () => {
    setIsEditingContactForm(false);
  };

  const handleContactFormSubmit = (formData) => {
    console.log(formData);
  };
  

  const handleBottomLeftClick = () => {
    setIsBottomLeftOpen(!isBottomLeftOpen);
  };

  return (
    <div className="homepage">
      <div
        className={`corner top-left ${
          activeCorner === "top-left" ? "active" : ""
        }`}
        onMouseEnter={() => handleCornerHover("top-left")}
        onMouseLeave={handleCornerLeave}
      >
        <span>Bio</span>
        {activeCorner === "top-left" && (
          <BioOverlay isOverlayOpen={isBottomLeftOpen} />
        )}
      </div>

      <div
        className={`corner top-right ${
          activeCorner === "top-right" ? "active" : ""
        }`}
        onMouseEnter={() => handleCornerHover("top-right")}
        onMouseLeave={handleCornerLeave}
      >
        <span>Skills</span>
        {activeCorner === "top-right" && <SkillsOverlay />}
      </div>

      <div
        className={`corner bottom-left ${
          activeCorner === "bottom-left" || isBottomLeftOpen ? "active" : ""
        }`}
        onMouseEnter={() => handleCornerHover("bottom-left")}
        onMouseLeave={handleCornerLeave}
        onClick={handleBottomLeftClick}
      >
        <span>My work</span>
        {(activeCorner === "bottom-left" || isBottomLeftOpen) && (
          <ProjectsOverlay />
        )}
      </div>

      <div
        className={`corner bottom-right ${
          activeCorner === "bottom-right" ? "active" : ""
        }`}
        onMouseEnter={() => handleCornerHover("bottom-right")}
        onMouseLeave={handleCornerLeave}
        onClick={handleClickContact}
      >
        <span>Contact</span>
        {(activeCorner === "bottom-right" || isEditingContactForm) && (
          <div className={`overlay ${isBottomRightClicked ? "open" : ""}`}>
            <ContactForm            
              handleFormSubmit={handleContactFormSubmit}
            />
          </div>
        )}
      </div>

      <div className="content">
        <h1 className="salutation">Hi, I'm Lia!</h1>
        <img src={woman} alt={woman} className="avatar" />
        <div className="column">
          <h1 className="qualification">Web Developer</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
