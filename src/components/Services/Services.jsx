import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./services.css";
import reunião from '../../assets/imgs/reunião3.jpg';

function Services() {
  return (
    <div className="container-fluid p-0">
      <div className="row bg-light-gray text-dark text-center ">
        <div className="col-9 col-sm-9 col-md-10 col-lg-10 col-xl-9 col-xxl-9">
          <h1 className="custom-heading my-4 display-4">WHO WE ARE?</h1>
        </div>
        <div className="col-12 col-sm-12 col-md-7 col-lg-7yar col-xl-5 col-xxl-4 mx-auto">
          <p className="custom-font-size fs-1">DWCorp is a company dedicated to providing technology (IT) solutions
            with a team of highly qualified developers.
            Founded with a commitment to driving innovation and excellence in technology-driven services.
            DWCorp stands out for offering tailored technological solutions
            to meet the specific needs of its customers.</p>
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 ">
          <img className="reunião" src={reunião} alt="reuniao" />
        </div>
      </div>
    </div>
  );
}

export default Services;
