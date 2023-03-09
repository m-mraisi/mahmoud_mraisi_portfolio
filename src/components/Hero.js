import { NavLink } from "react-router-dom";
import personalPhoto from "./assets/personal_image.jpg";
import "./HeroPage.css";

const HeroPage = () => {
  return (
    <div className="hero-page-container">
      <div className="hero-page-image-section">
        <img src={personalPhoto} alt="Mahmoud Mraisi" />
      </div>
      <div className="hero-page-text-section">
        <h1 className="hero-page-header">Mahmoud Mraisi</h1>
        <p className="hero-page-subheader">Full Stack & Mobile Developer</p>
        <p className="hero-page-description">
          Experienced Full Stack with expertise in MERN (MongoDB, ExpressJS,
          ReactJS, NodeJS) stack and experienced in eCommerce, Payment, CRM, and
          Enterprise Systems including Shopify and SAP. Passionate about fintech
          and building data-driven software services, with high proficiency in
          web and software development.
        </p>
        <NavLink className="hero-page-button" to="/about">
          Learn More
        </NavLink>
      </div>
    </div>
  );
};

export default HeroPage;
