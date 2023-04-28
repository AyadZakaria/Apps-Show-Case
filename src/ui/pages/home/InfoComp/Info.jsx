import React from "react";
import "./Info.css";
import ScreenShot2 from "../../../../assets/ScreenShot2.png";
import ScreenShot1 from "../../../../assets/ScreenShot1.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Info = () => {
  return (
    <>
      <section className="mainInfoSection">
        <div className="left">
          <img src={ScreenShot1} alt="AppScreenShot" />
          <div className="BlockOne"></div>
          <div className="BlockTwo"></div>
        </div>
        <div className="right">
          <h4 className="mainh4">Fitness Made Simple</h4>
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
            suscipit.
          </h1>
          <p className="descText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            ad illum aspernatur, soluta expedita, similique ipsa, atque mollitia
            maxime repudiandae dignissimos vero facere necessitatibus. Iste
            dolorem autem nemo sit atque.
          </p>
          <button className="PrimaryBtn">Get Started</button>
        </div>
      </section>
      <section className="SecondInfoSection">
        <div className="left">
          <h4 className="mainh4">Fitness Made Simple</h4>
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
            suscipit.
          </h1>
          <p className="descText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            ad illum aspernatur, soluta expedita, similique ipsa, atque mollitia
            maxime repudiandae dignissimos vero facere necessitatibus. Iste
            dolorem autem nemo sit atque.
          </p>
          <a href="/">
            View Available Options{" "}
            <ArrowRightAltIcon className="LinkArrowIcon" />{" "}
          </a>
        </div>
        <div className="right">
          <img src={ScreenShot2} alt="AppScreenShotTwo" />
          <div className="BlockOneBeta"></div>
          <div className="BlockTwoBeta"></div>
        </div>
      </section>
    </>
  );
};

export default Info;
