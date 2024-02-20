import React from "react";
import "./Contact.css";
import gamaImg from "../../assets/imgs/gama-img.png";
import compuletraImg from "../../assets/imgs/compuletra.png";
import consultImg from "../../assets/imgs/consult.png";
import hiroImg from "../../assets/imgs/hiro-img.png";
import JoneImg from "../../assets/imgs/img-jones.png";
import pigmaImg from "../../assets/imgs/pigma.png";

function Contact() {
  return (
    <div className="container-fluid p-0">
      <div className="row bg-light-white text-dark text-center">
        <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-8">
          <h1 className="custom my-4 display-4">OUR CLIENTS</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <div className="bigger">
            <img src={gamaImg} alt="Gama" className="gama-img"/>
          </div>
        </div>
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <div className="bigger">
            <img src={compuletraImg} alt="Compuletra" className="compuletra-img"/>
          </div>
        </div>
        <div className="col-3 col-sm-4 col-md-14 col-lg-4 col-xl-4 col-xxl-4">
          <div className="bigger">
            <img src={consultImg} alt="Consult" className="consult-img"/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <div className="bigger">
            <img src={hiroImg} alt="Hiro" className="hiro-img"/>
          </div>
        </div>
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <div className="bigger">
            <img src={JoneImg} alt="Jone" className="jone-img"/>
          </div>
        </div>
        <div className="col-3 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <div className="bigger">
            <img src={pigmaImg} alt="Pigma" className="pigma-img"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
