import React from "react";
import { AiFillGithub, AiFillMail, AiFillPhone } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function ContactForm() {
  return (
    <div>
      <p>Feel free to <span className="purple">connect </span>with me</p>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/demonxslayer47"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiFillGithub /> 
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/sreehari-t-494887322/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <FaLinkedinIn /> 
          </a>
        </li>
        <li className="social-icons">
          <a
            href="mailto:t.sreehari16@gmail.com"
            className="icon-colour home-social-icons"
          >
            <AiFillMail /> 
          </a>
        </li>
        <li className="social-icons">
          <a
            href="tel:3142990809"
            className="icon-colour home-social-icons"
          >
            <AiFillPhone /> 
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactForm;
