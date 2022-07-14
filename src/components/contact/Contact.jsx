import React from "react";
import "./contact.css";
import { useRef } from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { BsEnvelope } from "react-icons/bs";
import { FaHatWizard } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_l507bhx",
      "template_1y0regg",
      form.current,
      "2Cp6nqbAZHqq_6VAW"
    );
    setMsg("Message Sent! Thanks.");
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact">
      <h5 className="text-light">You may connect or leave a comment!</h5>
      <h2 className="text-light">Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsEnvelope className="contact__option-icon" />
            <h4>E-mail</h4>
            <h5>dhanajitkapali@gmail.com</h5>
            <a href="mailto:dhanajitkapali@gmail.com">Message</a>
          </article>
          {/* <article className="contact__option">
            <FaHatWizard className="contact__option-icon"/>
            <h4>Site</h4>
            <h5>SEOxperts</h5>
            <a href="https://seoxperts.com.br" target="_blank" rel="noopener noreferrer">seoxperts.com.br</a>
          </article> */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 9555226515</h5>
            <a
              href="https://wa.me/919555226515?text=Hello%2C%20Its%20me%20Dhanajit%20Kapali"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject"
            required
          />
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your e-mail" required />
          <textarea
            name="message"
            rows="7"
            required
            placeholder="Enter you text message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <span>{msg}</span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
