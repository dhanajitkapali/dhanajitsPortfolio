import React from "react";
import Typical from "react-typical";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.webp";
import SocialIcons from "../socialicons/SocialIcons";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5 className="text-light">Hello my name is </h5>
        <h1 className="text-light">Dhanajit Kapali</h1>{" "}
        <h3 className="mono text-light">
          <Typical
            loop={Infinity}
            steps={[
              "Passionate Software Developer From India 💻",
              1000,
              "iOS developer 💻",
              1000,
              "React Native Developer 👨‍🏫",
              1000,
            ]}
          />
        </h3>
        {/* <h4 className="text-light">
          Projetos de tecnologia, marketing e educação
        </h4> */}
        <CTA />
        <SocialIcons position="header__socialicons" />
        <div className="me">
          <img src={ME} alt="André Tavares Fotografando" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll
        </a>
      </div>
    </header>
  );
}
