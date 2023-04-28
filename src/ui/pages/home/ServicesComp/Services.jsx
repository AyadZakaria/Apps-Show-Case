import React from "react";
import "./Services.css";
import { ServicesData } from "./ServicesData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

const Services = () => {
  return (
    <section className="mainServicesSection">
      <div className="top">
        <div className="leftContainer">
          <h4 className="mainh4">Who we serve</h4>
          <h1>Smarter coaching solutions can help you achieve more.</h1>
        </div>
        <p className="descText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          pariatur animi quibusdam quo quaerat. Ipsam eligendi dolorum tenetur
          molestias quos! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolor, non.
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
            gap: ".1rem",
          }}
        >
          {ServicesData.map((elem, key) => (
            <SplideSlide>
              <div className="cart" key={key}>
                <div className="cart-icon">{elem.icon}</div>
                <h1 className="cart-title">{elem.title}</h1>
                <p className="descText">{elem.description}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Services;
