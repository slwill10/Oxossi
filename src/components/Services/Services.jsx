import React from "react";
import "./Services.css";
import mobile from "../../assets/imgs/mobile_app.png";
import software from "../../assets/imgs/software_dev.png";
import website from "../../assets/imgs/website_dev.png";

function Services() {
  return (
    <div className="container-fluid p-0">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row text-center first-row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div style={{ minHeight: '40px', marginTop: '10px', marginBottom: '20px', marginLeft: '-13%' }}>
              <h1 className="custom-heading my-4 display-4">SERVICES</h1>
            </div>
          </div>
        </div>
        <div className="row bg-light-gray text-dark text-center second-row">
          <div className="square-container">
            <div className="col-4 col-sm-4 col-md-1 col-lg-1 col-xl-1 col-xxl-2 first-column">
              <div className="small-square bigger-square">
                <img src={mobile} alt="Mobile App Development" className="mobile-image"/>
                <h1 className="title-firstSquare">MOBILE APP DEVELOPMENT</h1>
                <p className="phrase">It is the art of crafting mobile
                  applications tailored for devices,
                  encompassing the
                  development of software designed
                  for small,
                  wireless computing devices.</p>
              </div>
            </div>
            <div className="col-4 col-sm-4 col-md-1 col-lg-1 col-xl-1 col-xxl-1 second-column">
              <div className="small-square bigger-square">
                <img src={software} alt="Software Development" className="software-image"/>
                <h1 className="title-firstSquaretwo">SOFTWARE DEVELOPMENT</h1>
                <p className="phrase2">It entails the intricate process of conceiving,
                  sustaining applications,
                  crafting software frameworks,
                  engaging in design,
                  programming endeavors,
                  rigorous testing,
                  and meticulous bug fixing.</p>
              </div>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-5 col-xl-5 col-xxl-5 third-column">
              <div className="small-square bigger-square">
                <img src={website} alt="Website Development" className="website-image"/>
                <h1 className="title-thirdSquare">WEBSITE DEVELOPMENT</h1>
                <p className="phrase3">Encompassing the construction
                  and upkeep of websites;
                  crafting a visually appealing online
                  presence that operates seamlessly, ensuring a robust user experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
