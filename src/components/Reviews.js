import React from "react";
import classes from "./Reviews.module.css";

const Reviews = () => {
  return (
    <div className={classes["reviews-container"]}>
      <h1 className={classes["reviews-title"]}>Reviews & Recommendations</h1>
      <div className={classes["reviews-sections-container"]}>
        <div className={classes["review-section"]}>
          <p className={classes["review-text"]}>
            “Mahmoud has all the qualities to do so well in his career. He is
            determined, hard worker, smart, good communicator and doesn't stop
            until the job is done. In such a short period of time, he was able
            to grasp difficult SAP technical skills and help contribute
            significantly to ABS. I would be delighted to have him again on my
            team.“
          </p>
          <p className={classes["reviewer-name"]}>
            Advanced Business Solutions, Chief Executive Officer
          </p>
        </div>
        <div className={classes["review-section"]}>
          <p className={classes["review-text"]}>
            “Mahmoud Mraisi was a student of mine @ Georgian College
            (BDAT1011-Data Analytics Project) and always thought "outside the
            box" pertaining to assignments. He had exceptional "critical
            thinking skills" and was very convincing when providing analysis
            from various datasets. Whenever a new task had been suggested i.e
            Predictive Modelling, Mahmoud met the challenge and excelled.
            Overall he was a student that worked efficiently in a team
            environment and always strived for success. I wish Mahmoud success
            in his future endeavors.“
          </p>
          <p className={classes["reviewer-name"]}>
            Georgian College, Data Analytics - Professor Rick Lambroff
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
