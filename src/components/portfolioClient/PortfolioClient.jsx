import React from "react";
import "./portfolioClient.css";
import IMG1 from "../../assets/img-portfolio1.png";
import IMG2 from "../../assets/img-portfolio2.png";
import IMG3 from "../../assets/img-portfolio3.png";
import IMG4 from "../../assets/img-portfolio4.png";
import IMG5 from "../../assets/img-portfolio5.png";
import IMG6 from "../../assets/img-portfolio6.png";

// Data Array para preenhcer o portfolio
const portfolioClientData = [
  {
    id: 1,
    image: IMG1,
    title: "Be Exclusive Gym - Wordpress Design e SEO",
    github: "https://github.com",
    demo: "https://beexclusivegym.com.br",
  },
  {
    id: 2,
    image: IMG2,
    title: "Embeleze Gama - Site & Identidade Visual",
    github: "https://github.com",
    demo: "https://embelezegama.com.br",
  },
  {
    id: 3,
    image: IMG3,
    title: "SEOxperts - Site & Identidade Visual ",
    github: "https://github.com",
    demo: "https://seoxperts.com.br",
  },
  {
    id: 4,
    image: IMG4,
    title: "instituto Modal - Wordpress Design e SEO",
    github: "https://github.com",
    demo: "https://modal.org.br",
  },
  {
    id: 5,
    image: IMG5,
    title: "Mansão Cristal - Wordpress Design",
    github: "https://github.com",
    demo: "https://mansaocristal.com.br",
  },
  {
    id: 6,
    image: IMG6,
    title: "Microtecnica - Wordpress Design e SEO",
    github: "https://github.com",
    demo: "https://microtecnica.com.br",
  },
];

const PortfolioClient = () => {
  return (
    <section id="portfolioClient">
      <h5 className="text-light">Recent Work</h5>
      <h2 className="text-light">Client Projects</h2>
      <div className="container portfolio__container">
        {portfolioClientData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} className="image" alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioClient;