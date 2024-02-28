import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./Technology.css";
import reunião from '../../assets/imgs/reunião3.jpg';

function Technology() {
  return (
    <div className="container-fluid p-0" id='Technology'>
      <div className="row bg-light-gray text-dark text-center ">
        <div className="col-11 col-sm-11 col-md-12 col-lg-11 col-xl-11 col-xxl-11">
          <h1 className="custom-heading my-4 display-4">WHO WE ARE?</h1>
        </div>
        <div className="col-12 col-sm-12 col-md-7 col-lg-7yar col-xl-5 col-xxl-4 mx-auto">
          <p className="custom-font-size fs-1">DWCorpis a company dedicated to providing technology (IT) solutions
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

export default Technology;
