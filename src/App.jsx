import React from "react";
import "./App.css";
import LandingPage from "./LandingPage.jsx";
import HomePage from "./HomePage";
import ContactForm from "./ContactForm";
import "typeface-roboto-mono";

const App = () => {
  const [showLandingPage, setShowLandingPage] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setShowLandingPage(false);
    }, 8000); // Change the delay (in milliseconds) to adjust the duration of the landing page
  }, []);

  return (
    <div>
      {showLandingPage ? (
        <LandingPage />
      ) : (
        <HomePage>
          <ContactForm />
        </HomePage>
      )}
    </div>
  );
};

export default App;
