import React from "react";
import "./Work.css";
import { RxVideo } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import SociaVerse from "./assets/SociaVerse.jpg";
import CodePanda from "./assets/CodePanda.jpg";
import FitnessBookingApp from "./assets/FitnessBookingApp.png";
import Cancer_tumour_prediction from "./assets/Cancer_tumour_prediction.jpg";

const Work = () => {
  const items = [
    {
      name: "SociaVerse",
      imgURL: SociaVerse,
      imgALT: "SociaVerse",
      desc: `Developed a user-friendly social media Android mobile app featuring real-time updates, media sharing, and customizable profiles, resulting in an improved user experience and increased engagement. `,
      videoURL:
        "https://drive.google.com/file/d/1R-kIMvcCMq9vfIaWqTa6_Pta0abyz56m/view?usp=sharing",
      gitHubURL: "https://github.com/m-mraisi/Advanced_Android_ProjectG13",
    },
    {
      name: "CodePanda - Lesson Tutorials Android app",
      imgURL: CodePanda,
      imgALT: "CodePanda",
      desc: `Constructed a comprehensive lesson tutorial Android mobile app with interactive features, providing users with a seamless learning experience and enhancing their knowledge retention.`,
      videoURL:
        "https://drive.google.com/file/d/1t2sg9B5wJWEzEZeGEs-hvJqf49P6-LOB/view?usp=sharing",
      gitHubURL: "https://github.com/m-mraisi/Project-G10",
    },
    {
      name: "Food Order React App",
      imgURL:
        "https://user-images.githubusercontent.com/67347986/199403052-d5632264-cd3d-4e46-b907-806974360f18.png",
      imgALT: "Food Order App",
      desc: `Crafted an efficient and intuitive food order web app using React and Redux, allowing restaurant patrons to smoothly explore and make orders, simplifying the ordering process and enhancing customer experience.`,
      videoURL: "",
      gitHubURL: "https://github.com/m-mraisi/FoodOrderApp",
    },
    {
      name: "Fitness Booking Web App",
      imgURL: FitnessBookingApp,
      imgALT: "Fitness Booking Web App",
      desc: `Created a robust and scalable fitness booking web application using ReactJS and NodeJS, enabling users to easily book and manage their fitness classes, streamlining the booking process, and improving gym operations.`,
      videoURL:
        "https://drive.google.com/file/d/1v5UbmtpOLg_IVwlciCCYJz6vC6Kfu5ik/view?usp=sharing",
      gitHubURL: "https://github.com/m-mraisi/Fitness-Booking-App",
    },
    {
      name: "Cancerous Tumour Prediction",
      imgURL: Cancer_tumour_prediction,
      imgALT: "Cancerous Tumour Prediction",
      desc: `The Cancerous Tumour Prediction project is a machine learning solution aimed at predicting the cancerous status of a patient's tumour. The project uses the logistic regression algorithm to train a model on a "cancer.csv" dataset, which contains information about various factors that classify tumours as either cancerous or non-cancerous. The end goal is to help determine whether a patient requires surgery or not.

      This project showcases the potential of machine learning in the medical field and demonstrates the ability to solve real-world problems using data science techniques. By training a model on a large dataset and making predictions about the cancerous status of tumours, the Cancerous Tumour Prediction project highlights the importance of accurate classification in the medical field and the impact that data science can have on patient outcomes.`,
      videoURL: "",
      gitHubURL: "https://github.com/m-mraisi/Cancerous_Tumour_Predection",
    },
  ];

  const listItems = items.map((item, i) => (
    <div className={item.id % 2 === 0 ? `project even` : `project odd`} key={i}>
      <div className="project-name">{item.name}</div>
      <div className="project-details">
        <div className="project-image">
          <img src={item.imgURL} alt={item.imgALT} />
        </div>
        <div className="project-desc-details">
          <div className="project-description">{item.desc}</div>
          <div className="project-links">
            {item.videoURL && (
              <a
                target="_blank"
                rel="noreferrer"
                href={item.videoURL}
                className="project-link"
              >
                <RxVideo />
              </a>
            )}
            {!!item.gitHubURL && (
              <a
                target="_blank"
                rel="noreferrer"
                href={item.gitHubURL}
                className="project-link"
              >
                <AiFillGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="work-container">
      <h2 className="work-page-title">Personal Projects</h2>
      <div className="projects">{listItems}</div>
    </div>
  );
};

export default Work;
