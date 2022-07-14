import React from "react";
import "./portfolioClient.css";

import IMG1 from "../../assets/portfolioClient/img1.png";
import IMG2 from "../../assets/portfolioClient/img2.png";
import IMG3 from "../../assets/portfolioClient/img3.png";
import IMG4 from "../../assets/portfolioClient/img4.png";
import IMG5 from "../../assets/portfolioClient/img5.png";

// Data Array para preenhcer o portfolio
const portfolioClientData = [
  {
    id: 1,
    image: IMG1,
    title: "ACT - Internet Broadband Company",
    appStore: "https://apps.apple.com/in/app/act-fibernet/id1135015234",
    demo: "https://beexclusivegym.com.br",
  },
  {
    id: 2,
    image: IMG5,
    title: "Astroyogi - Astrology Chat/VideoCall App",
    appStore:
      "https://apps.apple.com/us/app/astroyogi-astrology-online/id1475620580",
    demo: "https://embelezegama.com.br",
  },
  {
    id: 3,
    image: IMG3,
    title: "eJohri - Ecommerce for jewellery ",
    appStore: "https://apps.apple.com/in/app/ejohri/id1484941786",
    demo: "https://seoxperts.com.br",
  },
  {
    id: 4,
    image: IMG4,
    title: "eJPhoto - Jewllery Photography",
    appStore: "https://apps.apple.com/in/app/ejphoto/id1506913710",
    demo: "https://modal.org.br",
  },
  {
    id: 5,
    image: IMG2,
    title: "IDentity Developer - ID Verification",
    appStore: "https://apps.apple.com/us/app/identity-developer/id1431646776",
    demo: "https://mansaocristal.com.br",
  },
  //   {
  //     id: 6,
  //     image: IMG6,
  //     title: "Microtecnica - Wordpress Design e SEO",
  //     appStore: "https://github.com",
  //     demo: "https://microtecnica.com.br",
  //   },
];

const PortfolioClient = () => {
  return (
    <section id="portfolioClient">
      <h5 className="text-light">Recent Work</h5>
      <h2 className="text-light">Client Projects</h2>
      <div className="container portfolio__container">
        {portfolioClientData.map(({ id, image, title, appStore, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} className="image" alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={appStore}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AppStore
                </a>
                <a
                  //href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My role was...
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
