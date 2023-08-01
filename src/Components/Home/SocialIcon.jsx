import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import linkedin from "../../assets/images/linkedin.png";
import twitter1 from "../../assets/images/twitter1.png";
import telegram from "../../assets/images/telegram.png";
import leetcode from "../../assets/images/leetcode.png";
import resume from "../../assets/images/resume.jpg";
import git from "../../assets/images/git.png";

function SocialIcon() {
  return (
    <div className="contact-me-logos">
      <button className="logo-btn">
        <Link
          to="/files/Ajit_Singh_Resume.pdf"
          target="_blank"
          download
        >
          <img className="logo" src={resume} alt="resume logo" />
        </Link>
      </button>
      <button className="logo-btn">
        <a
          href="https://www.linkedin.com/in/ajit-singh-4a3b8793/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logo" src={linkedin} alt="linkedin logo" />
        </a>
      </button>
      <button className="logo-btn">
        <a href="https://t.me/ajitdhaliwal" target="_blank" rel="noreferrer">
          <img className="logo" src={telegram} alt="linkedin logo" />
        </a>
      </button>
      {/* <button className="logo-btn">
        <a
          href="https://www.instagram.com/navdeep2553/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logo" src={instagram} alt="linkedin logo" />
        </a>
      </button> */}
      <button className="logo-btn">
        <a
          href="https://twitter.com/dhaliwal_ajit"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logo" src={twitter1} alt="linkedin logo" />
        </a>
      </button>
      <button className="logo-btn">
        <a href="https://github.com/ajitsingh777" target="_blank" rel="noreferrer">
          <img className="logo" src={git} alt="github logo" />
        </a>
      </button>
      <button className="logo-btn">
        <a
          href="https://leetcode.com/user1543y/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="logo"
            src={leetcode}
            alt="leetcode logo"
            style={{ backgroundColor: "black" }}
          />
        </a>
      </button>
    </div>
  );
}

export default SocialIcon;
