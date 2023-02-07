import { NavLink } from "react-router-dom";
import personalPhoto from "./assets/personal_image.jpg";
import "./HeroPage.css";

const HeroPage = () => {
  return (
    <div className="hero-page-container">
      <div className="hero-page-text-section">
        <h1 className="hero-page-header">Mahmoud Mraisi</h1>
        <p className="hero-page-subheader">Full Stack & Mobile Developer</p>
        <p className="hero-page-description">
          Experienced Software Developer with expertise in web development and
          data integration. Skilled in ReactJS, NodeJS, Swift, Kotlin, and data
          science with a passion for delivering efficient and effective tech
          solutions.
        </p>
        <NavLink className="hero-page-button" to="/about">
          Learn More
        </NavLink>
      </div>
      <div className="hero-page-image-section">
        <img src={personalPhoto} alt="Mahmoud Mraisi" />
      </div>
    </div>
  );
};

export default HeroPage;
