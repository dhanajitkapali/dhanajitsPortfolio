import React from "react";
import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="text-light">Main Skills</h5>
      <h2 className="text-light">Project Experience</h2>
      <div className="container experience__container">
        <div className="experience__mkt-edu">
          <h3>Native iOS dev.</h3>
          <div className="experience__content">
            <article className="experience__details" title="">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Swift</h5>
              </div>
              <progress value="90" max="100">
                90%
              </progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Objective-C</h5>
              </div>
              <progress value="80" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5 title="Vanilla, ES5, ES6, Jquery">Program.-UI</h5>
              </div>
              <progress value="80" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>StoryBoard</h5>
              </div>
              <progress value="80" max="100"></progress>
            </article>

            <article
              className="experience__details"
              title="SEO técnico, local, otimizações"
            >
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Core Data</h5>
              </div>
              <progress value="70" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Core Anim.</h5>
              </div>
              <progress value="70" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Core ML</h5>
              </div>
              <progress value="70" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Swift-UI</h5>
              </div>
              <progress value="70" max="100"></progress>
            </article>
            {/* <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>RxSwift</h5>
              </div>
              <progress value="70" max="100"></progress>
            </article> */}
          </div>
        </div>

        <div className="experience__title-ti">
          <h3>Hybrid app dev.</h3>
          <div className="experience__content">
            <article
              className="experience__details"
              title="Web Semântica, XML, Web Standards"
            >
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>ReactNative</h5>
              </div>
              <progress value="90" max="100">
                90%
              </progress>
            </article>

            <article className="experience__details" title="DOM, APIs, JSON">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5 title="Vanilla, ES5, ES6, Jquery">JavaScript</h5>
              </div>
              <progress value="30" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Func. React</h5>
              </div>
              <progress value="35" max="100"></progress>
            </article>
            <article
              className="experience__details"
              title="Woocommerce, LMS, Customizações, Elementor, Temas e Plugins"
            >
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Class React</h5>
              </div>
              <progress value="70" max="100"></progress>
            </article>
            <article
              className="experience__details"
              title="Wordpress, Moodle, Blackboard, Talent LMS, LearnDash"
            >
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Axios</h5>
              </div>
              <progress value="70" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Context API</h5>
              </div>
              <progress value="80" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Redux</h5>
              </div>
              <progress value="80" max="100"></progress>
            </article>
          </div>
        </div>

        <div className="experience__mkt-edu">
          <h3>Others</h3>
          <div className="experience__content">
            <article
              className="experience__details"
              title="Edição e tratamento"
            >
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>FireBase</h5>
              </div>
              <progress value="70" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>ML Kit</h5>
              </div>
              <progress value="80" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>SQLite</h5>
              </div>
              <progress value="95" max="100"></progress>
            </article>

            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Design Patterns</h5>
              </div>
              <progress value="80" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Architecture</h5>
              </div>
              <progress value="80" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Java</h5>
              </div>
              <progress value="80" max="100"></progress>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
