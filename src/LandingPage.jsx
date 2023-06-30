import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import sky from "./images/sky.jpg";
import satellite from "./images/satellite.jpg";
import HomePage from "./HomePage";

const LandingPage = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    const imageTransitionTimeout = setTimeout(() => {
      setShowFirstImage(false);
      setShowSecondImage(true);
    }, 3000); // Delay before hiding the first image

    const homepageTimeout = setTimeout(() => {
      setShowHomePage(true);
    }, 4000); // Delay before showing the homepage

    return () => {
      clearTimeout(imageTransitionTimeout);
      clearTimeout(homepageTimeout);
    };
  }, []);

  return (
    <div className="landing-page">
      {showFirstImage && (
        <img
          src={sky}
          alt="sky"
          className={`fade-image ${showFirstImage ? "show" : ""}`}
        />
      )}
      {showSecondImage && (
        <img
          src={satellite}
          alt="satellite"
          className={`fade-image ${showSecondImage ? "show" : ""}`}
        />
      )}
      {showHomePage && showSecondImage && !showFirstImage && (
        <div className={`homepage ${showHomePage ? "show" : ""}`}>
          <HomePage />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
