import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import logodw from "../../assets/imgs/logod.png";
import linkedin from "../../assets/imgs/linkedin.png";
import usa from "../../assets/imgs/usa.png";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) {
        const scrolled = window.scrollY;
        setVisible(scrolled < 600);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    setIcon(icon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className={`nav ${visible ? "fadeIn" : "fadeOut"}`}>
      <img className="logodw" src={logodw} alt="Logodw" />
      <ul className={active}>
        <li className="nav__item nav__link" onClick={() => scrollToSection("services")}>
          Services
        </li>
        <li className="nav__item nav__link" onClick={() => scrollToSection("Technology")}>
          Technology
        </li>
        <li className="nav__item nav__link"  onClick={() => scrollToSection("About")}>
          Who We Are
        </li>
        <li className="nav__item nav__link" onClick={() => scrollToSection("blogs")}>
          Blogs
        </li> 
      </ul>
      <div className="logo-container">
        <img className="usa" src={usa} alt="Usa" />
        <img className="linkedin" src={linkedin} alt="Logo"/>
        <div className="contact">
            CONTACT US
          </div> 
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}


export default Navbar;