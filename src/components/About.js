import "./About.css";
import personalPhoto from "./assets/personal_image.jpg";

const About = () => {
  return (
    <div className="about-page-container">
      <div className="about-page-image-section">
        <img src={personalPhoto} alt="Your Name" />
      </div>
      <div className="about-page-text-section">
        <h1 className="about-page-header">Mahmoud Mraisi</h1>
        <p className="about-page-subheader">Full Stack & Mobile Developer</p>
        <p className="about-page-description">
          As a Mobile and Web Application graduate student with a post-grad
          certificate in data science, I have gained a comprehensive
          understanding of the latest technologies and best practices in web
          development. My hands-on experience includes building web portals
          using HTML, CSS, and JavaScript, with ReactJS and NodeJS, as well as
          designing and developing mobile applications for IOS using Swift,
          Android using Kotlin, and Cross-Platform applications. My data science
          knowledge further enhances my ability to develop and integrate
          data-driven solutions in web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
