import React from "react";
import { TestimonyData } from "./TestimonyData";
import ReactStars from "react-rating-stars-component";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Testimony.css";
import "@splidejs/react-splide/css/sea-green";
const Testimony = () => {
  return (
    <section className="mainTestimonySection">
      <div className="top">
        <h4 className="mainh4">TESTIMONIALS</h4>
        <h1>User's success stories.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          laborum sequi ratione laudantium rerum.
        </p>
      </div>
      <div className="bottom">
        <Splide
          options={{
            rewind: true,
            width: 900,
            autoplay: true,
            perPage: 2.5,
            arrows: false,
            pagination: false,
            focus: 1,
            gap: "1rem",
          }}
        >
          {TestimonyData.map((elem, key) => (
            <SplideSlide>
              <div className="testimonyCart" key={key}>
                <ReactStars
                  count={elem.rating}
                  size={20}
                  edit={false}
                  color="#f1db14"
                />
                <p>" {elem.description} "</p>
                <div className="userInfo">
                  <div className="userInfoData">
                    <h1>{elem.username}</h1>
                    <p>{elem.fonctinality}</p>
                  </div>
                  <div className="userInfoIcon">
                    <div className="userPhotoBackground"></div>
                    <img src={elem.photo} alt="userPhoto" />
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimony;
