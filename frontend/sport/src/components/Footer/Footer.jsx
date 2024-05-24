import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

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
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
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
