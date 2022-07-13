import React from "react";
import "./about.css";
import dhanajitKapaliMemoji from "../../assets/dhanajitKapaliMemoji.jpg";
import { GiNinjaHead } from "react-icons/gi";
import { GoOrganization } from "react-icons/go";
import { RiTeamFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5 className="text-light">About my work on projects</h5>
      <h2 className="text-light">Technology</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={dhanajitKapaliMemoji} alt="Dhanjit Kapali Photo" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiNinjaHead className="about__icon" />
              <h5>Experience</h5>
              <small>+2 years of experience</small>
            </article>
            <article className="about__card">
              <GoOrganization className="about__icon" />
              <h5>Domain Experience</h5>
              <small>E-Commerce, Networking, Communication etc.</small>
            </article>
            <article className="about__card">
              <RiTeamFill className="about__icon" />
              <h5>Projects</h5>
              <small>Native/Hybrid Mobile Apps</small>
            </article>
          </div>
          <p>
            Hi, I am Dhanajit Kapali, currently working as a Junior iOS
            developer at Unthinkable Solutions LLP. I have overall +2 years of
            experience in software development, developing native/hybrid mobile
            applications. I have successfully delivered multiple projects for
            various clients from different domains. I have strong problem
            solving skills and love to solve algorithms problems.
          </p>
          <a href="#contact" className="btn btn-primary">
            Know more about me.
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
