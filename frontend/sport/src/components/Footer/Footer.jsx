import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false); //manages visibility

  const handleScroll = () => { //checks the scroll position of the window
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight; //The height of the visible part of the window
    const fullHeight = document.documentElement.scrollHeight; // The total height of the document

    if (scrollTop + windowHeight >= fullHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // adding/removing event listeners for when user scrolls

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}> {/* If isVisible is true, the string 'visible' is included in the className and styled in CSS*/}
      <div className="footer-content">
        <div className="footer-left">
          <p>All rights reserved © Kate Koshkina</p>
        </div>
        <div className="footer-right">
          <a href="https://www.linkedin.com/in/kate-koshkina/" target="_blank">
            <FaLinkedin size={26} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
