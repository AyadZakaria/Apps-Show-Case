import React, { useState } from "react";
import { NavItems } from "./NaviItems";
import "./header.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TestLogo from "../../../../assets/TestLogo.png";
import Menu from "../../../../assets/menu.png";
const Header = () => {
  const [navstate, setNavstate] = useState("ResponsiveNav closed");
  const [selectedListIndex, setSelectedListIndex] = useState(-1);
  const handelNav = () => {
    if (navstate == "ResponsiveNav opened") {
      setNavstate("ResponsiveNav closed");
    } else {
      setNavstate("ResponsiveNav opened");
    }
  };
  return (
    <header className="mainHeader">
      {/* Logo */}
      <img src={TestLogo} alt="logo" className="Logo" />
      {/* Navbar */}
      <nav className="mainNav">
        <ul className="navItems">
          {/* maping data from NavItems ito List Items */}
          {NavItems.map((elem, key) => (
            <>
              <li className="navItem" key={key}>
                {elem.title}{" "}
                {elem.children && (
                  <KeyboardArrowDownIcon className="arrowIcon" />
                )}
                {/* checking if the element has a sub menu then create a second list with his childrens */}
                {elem.children && (
                  <ul className="subMenu">
                    {elem.children.map((subElem, skey) => (
                      <li key={skey}>{subElem.title}</li>
                    ))}
                  </ul>
                )}
              </li>
            </>
          ))}
        </ul>
        <button onClick={handelNav} className="ResponsiveNavMenu">
          <img src={Menu} alt="Menu" />
        </button>
        {/* Buy Now Button */}
        <button className="PrimaryBtn BuyNow">Buy Now</button>
      </nav>
      {/* Responsive Navbar */}
      <div className={navstate}>
        <ul>
          {NavItems.map((elem, key) => (
            <>
              <li key={key}>
                {elem.title}
                {elem.children && (
                  <button
                    className="ArrowBtn"
                    onClick={() => {
                      if (selectedListIndex == -1) {
                        setSelectedListIndex(key + 1);
                      } else {
                        setSelectedListIndex(-1);
                      }
                    }}
                  >
                    <KeyboardArrowDownIcon className="arrowIcon" />
                  </button>
                )}
              </li>
              {elem.children && (
                <ul
                  key={key}
                  className="ResponsiveSubMenu"
                  style={{
                    display: elem.id == selectedListIndex ? "block" : "none",
                  }}
                >
                  {elem.children.map((subElem, skey) => (
                    <li key={skey}>{subElem.title}</li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
