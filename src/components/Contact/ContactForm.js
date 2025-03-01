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
            href="https://www.linkedin.com/in/sreeharithota/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <FaLinkedinIn /> 
          </a>
        </li>
        <li className="social-icons">
          <a
            href="mailto:sreeharithota01@gmail.com"
            className="icon-colour home-social-icons"
          >
            <AiFillMail /> 
          </a>
        </li>
        <li className="social-icons">
          <a
            href="tel:3146490205"
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
