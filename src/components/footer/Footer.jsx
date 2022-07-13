import React from "react";
import "./footer.css";
import SocialIcons from "../socialicons/SocialIcons";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Dhanajit Kapali
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li><a href="#services">Serviços</a></li> */}
        <li>
          <a href="#portfolioClient">Client Projects</a>
        </li>
        <li>
          <a href="#portfolioSelf">My Hobby Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <SocialIcons position="footer__socialicons" />
      <div className="footer__copyright">
        <small>
          &copy; {new Date().getFullYear()} Dhanajit Kapali. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
