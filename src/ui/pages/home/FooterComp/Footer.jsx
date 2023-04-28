import React from "react";
import { NavItems } from "../HeaderComp/NaviItems";
import "./footer.css";
import Logo from ".././../../../assets/TestLogo.png";
const Footer = () => {
  return (
    <footer>
      <div className="mainFooter">
        <div className="left">
          <img src={Logo} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            debitis sed harum iure eos eaque dolore possimus obcaecati ullam
            blanditiis.
          </p>
        </div>
        <div className="midlle">
          <h1>
            <span>I</span> Contact Us
          </h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>call us : 0000000000</p>
          <p>test@email.com</p>
        </div>
        <div className="right">
          <h1>
            <span>I</span> Sign Up
          </h1>
          <div className="emailButton">
            <input type="email" placeholder="Your e-mail adress" />
            <button> Subscribe</button>
          </div>
          <p>
            <i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              necessitatibus?
            </i>
          </p>
        </div>
      </div>
      
      <div className="bottom">
        <p>Copyright &copy;2023 .All rights reserved.</p>
        <div className="footerNav">
          <ul>
            {NavItems.map((elem, key) => (
              <li key={key}>{elem.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
