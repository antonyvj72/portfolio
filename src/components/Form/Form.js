import "./FormStyles.css";
import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Form = () => {
  const [status,setStatus] = useState('')
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zo7t7zs",
        "template_k00dy6p",
        e.target,
        "6SREB9ju8RRi2AAr9"
      )
      .then((res) => {
        console.log(res);
      })
      
      .catch((err) => console.log(err));
    e.target.reset();
    setStatus('success');
  }

  return (
    <div className="form">
      
      <form onSubmit={sendEmail}>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          className="inputs"
          required="on"
        ></input>

        <label>Email</label>
        <input
          type="text"
          name="user_email"
          autoComplete="off"
          className="inputs"
          required="on"
        ></input>

        <label>Subject</label>
        <input
          type="text"
          name="subject"
          autoComplete="off"
          className="inputs"
        ></input>

        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name="message"
          autoComplete="off"
          className="inputs"
          required="on"
        ></textarea>
        <button type="submit" className="btn" value="Send Message">
          Send
        </button>
        {status && renderAlert()}
      </form>
    </div>
  );
};

const renderAlert = () => (
  <div>
    <p className="thankyouMsg">Thankyou for contacting me</p>
  </div>
);

export default Form;
