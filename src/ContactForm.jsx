import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";
import "bootstrap/dist/js/bootstrap.min.js";

const ContactForm = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    const newName = e.target.value;
    console.log(newName);
    setName(newName);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    console.log(newEmail);
    setEmail(newEmail);
  };

  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    console.log(newMessage);
    setMessage(newMessage);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };
    console.log(formData);
  
    try {
      const response = await axios.post("/api/submit-form", formData);
      console.log("Form submission response:", response.data);
      // Form submitted successfully
      // Add any further actions or notifications here
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle form submission error
      // Add any error handling or notifications here
    }
  };

  return (
    <div className="container-contact-form">
      {/* Rest of your component code */}
    </div>
  );
};

export default ContactForm;
