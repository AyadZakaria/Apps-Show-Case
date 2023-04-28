import React from "react";
import Dumble from "../../../../assets/dumble.png";
import SecondaryPic from '../../../../assets/homeBg2.png'
import mainPic from '../../../../assets/homeBg1.png'
import "./home.css";
const Home = () => {
  return (
    // section Container
    <section className="mainSection">
      {/* left container */}
      <div className="left">
        <h4 className="mainh4">Lorem ipsum, dolor sit amet test.</h4>
        <h1>Lorem ipsum dolor amet </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis{" "}
        </p>
        <button className="PrimaryBtn">Get Started</button>
        <p>
          Already have an account <a href="/signin">sign in</a>
        </p>
      </div>
      {/* center container */}
      <div className="middle">
        {/* main Picture background div */}
        <div className="bachgroundDiv">
          <img
            className="mainPic"
            src={mainPic}
            alt="mainPic"
          />
        </div>
        <img
          src={SecondaryPic}
          alt="SecondaryPic"
          className="SecondaryPic"
        />
      </div>
      {/* right continer */}
      <div className="right">
        <div className="firstChild">
          <img className="dumble" src={Dumble} alt="dumble" />
          <h1>Word Class Experts</h1>
        </div>
        <div className="secondChild">
          <h1>18K +</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="thirdChild">
          <h1>13000 + </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
