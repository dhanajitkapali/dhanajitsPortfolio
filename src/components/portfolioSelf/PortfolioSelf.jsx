import React from "react";
import "./portfolioSelf.css";
import IMG1 from "../../assets/portfolioSelf/spotifyPresentation.jpg";
import IMG2 from "../../assets/portfolioSelf/tikTokPresentation.jpg";
import IMG3 from "../../assets/portfolioSelf/tinderPresentation.jpg";
import IMG4 from "../../assets/portfolioSelf/vaxVisionPresentation.jpg";
import IMG5 from "../../assets/portfolioSelf/uberClonePresentation.jpg";

// Data Array para preenhcer o portfolio
const portfolioSelfData = [
  {
    id: 1,
    image: IMG1,
    title: "Spotify App - Clone of the official Spotify app",
    github: "https://github.com/iosSwiftProjectsByDhanajitKapali/Spotify",
    demo: "https://beexclusivegym.com.br",
  },
  {
    id: 2,
    image: IMG2,
    title: "TikTok App - Clone of the official TikTok app",
    github: "https://github.com/iosSwiftProjectsByDhanajitKapali/TikTokClone",
    demo: "https://embelezegama.com.br",
  },
  {
    id: 3,
    image: IMG3,
    title: "Tinder App - Clone of the official Tinder app ",
    github:
      "https://github.com/reactNativeProjectsByDhanajitKapali/TinderClone",
    demo: "https://seoxperts.com.br",
  },
  {
    id: 4,
    image: IMG4,
    title: "VaxVision - App to check vaccine slots",
    github: "https://github.com/iosSwiftProjectsByDhanajitKapali/Vax-Vision",
    demo: "https://modal.org.br",
  },
  {
    id: 5,
    image: IMG5,
    title: "Uber Clone - Clone of Uber App",
    github: "https://github.com/reactNativeProjectsByDhanajitKapali/Uber-clone",
    demo: "https://mansaocristal.com.br",
  },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Microtecnica - Wordpress Design e SEO",
  //   github: "https://github.com",
  //   demo: "https://microtecnica.com.br",
  // },
];

const PortfolioSelf = () => {
  return (
    <section id="portfolioSelf">
      <h5 className="text-light">Recent Work</h5>
      <h2 className="text-light">Side Projects</h2>
      <div className="container portfolio__container">
        {portfolioSelfData.map(({ id, image, title, github, demo }) => {
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
                {/* <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Site
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioSelf;
