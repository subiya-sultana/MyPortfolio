import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const scrollTop = () => {
    // alert("scroll to top");
    // let button = document.getElementsByClassName('scroll-top');
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    window.scrollTo({
      top: (document.documentElement.scrollTop = 0),
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <button className="scroll-top" onClick={scrollTop}>
        <FontAwesomeIcon className="icon" icon={faAnglesUp} />
      </button>
      <span>
        Designed & Build By Subiya Sultana
        <FontAwesomeIcon className="icon" icon={faHeart} />
      </span>
    </div>
  );
};

export default Footer;
