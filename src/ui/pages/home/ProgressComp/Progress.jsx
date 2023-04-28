import React from "react";
import "./Progress.css";
import ScreenShot3 from '../../../../assets/ScreenShot3.png'
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const Progress = () => {
  return (
    <>
      <section className="mainProgressSection">
        <div className="left">
          <h4 className="mainh4">Fitness Made Simple</h4>
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
            suscipit.
          </h1>
          <div className="checkParagraphs">
            <p className="checkParagraph">
              <CheckCircleRoundedIcon className="paraIcon" color="primary" />{" "}
              Lorem ipsum dolor sit
            </p>
            <p className="checkParagraph">
              <CheckCircleRoundedIcon className="paraIcon" color="primary" />{" "}
              Lorem ipsum dolor sit
            </p>
            <p className="checkParagraph">
              <CheckCircleRoundedIcon className="paraIcon" color="primary" />{" "}
              Lorem ipsum dolor sit
            </p>
          </div>
          <button className="PrimaryBtn">Get aStarted</button>
        </div>
        <div className="right">
          <div className="BlockOneGama"></div>
          <div className="BlockTwoGama"></div>
          <img src={ScreenShot3} alt="AppScreenShotThree" />
        </div>
      </section>
      <section className="getStartedSection">
        <div className="left">
          <h1>Sign up for unlimited free workouts today.</h1>
          <p>Anytime, anywhere. Whenever you want.</p>
        </div>
        <button className="SecondaryBtn">Sign Up Now</button>
      </section>
    </>
  );
};

export default Progress;
