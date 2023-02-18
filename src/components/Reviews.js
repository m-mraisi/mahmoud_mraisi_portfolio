import React from "react";
import { useEffect } from "react";
import classes from "./Reviews.module.css";

const Reviews = () => {
  const reviewList = [
    {
      reviewContent: `“Mahmoud has all the qualities to do so well in his career. He is
      determined, hard worker, smart, good communicator and doesn't stop
      until the job is done. In such a short period of time, he was able
      to grasp difficult SAP technical skills and help contribute
      significantly to ABS. I would be delighted to have him again on my
      team.“`,
      reviewAuthor: "Alaa Muqattash, PH.D. - CEO, Advanced Business Solutions",
    },
    {
      reviewContent: `“Mahmoud Mraisi was a student of mine @ Georgian College
      (BDAT1011-Data Analytics Project) and always thought "outside the
      box" pertaining to assignments. He had exceptional "critical
      thinking skills" and was very convincing when providing analysis
      from various datasets. Whenever a new task had been suggested i.e
      Predictive Modelling, Mahmoud met the challenge and excelled.
      Overall he was a student that worked efficiently in a team
      environment and always strived for success. I wish Mahmoud success
      in his future endeavors.“`,
      reviewAuthor: "Data Analytics Professor Rick Lambroff - Georgian College",
    },
    {
      reviewContent: `“Mahmoud is a true asset to any team or project.
       He possesses a unique combination of technical expertise, intelligence,
       and an unwavering work ethic that sets him apart. He has an insatiable 
       curiosity and a relentless drive to not only understand the technical details 
       of a project, but to also see the bigger picture and explore its potential applications. 
       Whether he's tackling complex technical challenges or exploring new solutions, 
       Mahmoud approaches every task with creativity, focus, 
       and determination that produces great results.“`,
      reviewAuthor:
        "Data Analytics & Cloud Computing Professor Saber Amini - Georgian College",
    },
  ];

  const reviewListView = reviewList.map((item, i) => (
    <div className={classes["review-section"]} key={i}>
      <p className={classes["review-text"]}>{item.reviewContent}</p>
      <p className={classes["reviewer-name"]}>{item.reviewAuthor}</p>
    </div>
  ));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes["reviews-container"]}>
      <h1 className={classes["reviews-title"]}>Reviews & Recommendations</h1>
      <div className={classes["reviews-sections-container"]}>
        {reviewListView}
      </div>
    </div>
  );
};

export default Reviews;
