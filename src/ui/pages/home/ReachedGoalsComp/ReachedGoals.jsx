import React from "react";
import ScreenShot4 from "../../../../assets/ScreenShot4.png";
import "./ReachedGoals.css";
const ReachedGoals = () => {
  return (
    <section className="mainReachedGoalsSection">
      {/* Reached Goals Data */}
      <div className="left">
        <h1 className="percentag">76%</h1>
        <h1 className="header">Of users reached their goals</h1>
        <p>
          Across all fitness levels, ApkaFitness offers high quality programming
          through a broad range of rich and immersive custom content
          experiences.
        </p>
      </div>
      {/* reached Goals Image */}
      <div className="right">
        <img src={ScreenShot4} alt="reachedGoals" />
      </div>
    </section>
  );
};

export default ReachedGoals;
