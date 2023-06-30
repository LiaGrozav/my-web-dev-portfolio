import React, { useState } from "react";
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };
    console.log(formData);
  };

  return (
    <div className="container-contact-form">
      <p>
        Do you have any questions or would like to meet me?
        <br />
        <br />
        Please do not hesitate to contact me directly.
      </p>
      <form netlify="true" name="contactForm" onSubmit={handleFormSubmit}>
        <input type="hidden" name="form-name" value="contactForm" />
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;