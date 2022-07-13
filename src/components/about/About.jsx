import React from "react";
import "./about.css";
import Andre from "../../assets/andre-tavares-about.webp";
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
            <img src={Andre} alt="André Tavares por Nathalia Millen" />
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
              <h5>Customer Domain</h5>
              <small>E-Commerce, Networking, Communication etc.</small>
            </article>
            <article className="about__card">
              <RiTeamFill className="about__icon" />
              <h5>Projects</h5>
              <small>Par</small>
            </article>
          </div>
          <p>
            Há mais de 20 anos em projetos nas áreas de educação, tecnologia e
            desenvolvimento profissional. Tive o privilégio de compor e liderar
            equipes em projetos de integração de sistemas, desenvolvimento de
            aplicações, inovação e gestão do conhecimento. Total dedicação aos
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
