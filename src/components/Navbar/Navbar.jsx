import React from "react";
import logo from "../../assets/imgs/usa.png";
import "./navbar.css";
import linkedin from "../../assets/imgs/linkedin.png";
import logodw from "../../assets/imgs/dwcorp.png";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav>
      <div className="navbar-container">
        <img className="logodw" src={logodw} alt="Logodw" />
        <div className="nav-links">
          <div
            className="nav-services"
            onClick={() => scrollToSection("services")}
          >
            Services
          </div>
          <div
            className="nav-technology"
            onClick={() => scrollToSection("Technology")}
          >
            Technology
          </div>
          <div className="nav-about" onClick={() => scrollToSection("About")}>
            Who We Are
          </div>
          <div className="nav-blogs" onClick={() => scrollToSection("blogs")}>
            Blogs
          </div>
        </div>
        <div className="logo-container">
          <img className="usa" src={logo} alt="Logo" />
          <img className="linkedin" src={linkedin} alt="Logo" />
          <div onClick={() => scrollToSection("Contact")}>CONTACT US</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
