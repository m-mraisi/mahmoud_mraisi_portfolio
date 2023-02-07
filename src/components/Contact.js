import "./Contact.css";
// import personalPhoto from "./assets/personal_image.jpg";

const Contact = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-page-form">
        <h1 className="page-title">Let's talk</h1>
        <p className="page-sub-title">
          Get in touch via the form below, or by emailing{" "}
          <a className="contact-email" href="mailto:mahmoudmraisi2@gmail.com">
            mahmoudmraisi2@gmail.com
          </a>
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" />
          <button type="submit">Submit</button>
        </form>
        <p className="page-sub-title">
          Or find me on:
          <a
            href="https://www.linkedin.com/in/mahmoud-mraisi-b65104179/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="contact-linkedIn"
              src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
            />
          </a>
        </p>
      </div>
      {/* <div className="contact-page-image-section">
        <img src={personalPhoto} alt="Mahmoud Mraisi" />
      </div> */}
    </div>
  );
};

export default Contact;
