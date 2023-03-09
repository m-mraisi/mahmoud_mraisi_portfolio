import { useState } from "react";
import "./Contact.css";
// import personalPhoto from "./assets/personal_image.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the backend service
    fetch(
      "https://mahmoud-portfolio-backend.netlify.app/.netlify/functions/index/send-email",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Email sent successfully");
          alert("Email sent successfully");
          setFormData({ name: "", email: "", message: "" });
        } else {
          alert("Failed to send email");
          console.error("Failed to send email");
          setFormData({ name: "", email: "", message: "" });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  return (
    <div className="contact-page-container">
      <div className="contact-page-form">
        <h1 className="page-title">Let's Connect</h1>
        <p className="page-sub-title">
          Get in touch via the form below, or by emailing{" "}
          <a className="contact-email" href="mailto:mahmoudmraisi2@gmail.com">
            mahmoudmraisi2@gmail.com
          </a>
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
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
          <a
            href="https://github.com/m-mraisi"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="contact-github"
              src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg"
              alt="GitHub"
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
