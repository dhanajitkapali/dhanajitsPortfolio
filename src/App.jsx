// import './App.css';
import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import PortfolioClient from "./components/portfolioClient/PortfolioClient";
import PortfolioSelf from "./components/portfolioSelf/PortfolioSelf";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      {/* <Portfolio /> */}
      <PortfolioClient />
      <PortfolioSelf />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
