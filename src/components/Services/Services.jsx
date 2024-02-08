import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./services.css";
import reunião from '../../assets/imgs/reunião3.jpg';

function Services() {
  return (
    <div className="container-fluid p-0">
      <div className="row bg-light-gray text-dark text-center ">
        <div className="col-9 col-sm-9 col-md-10 col-lg-10 col-xl-10 col-xxl-9">
          <h1 className="custom-heading my-4 display-4">WHO WE ARE?</h1>
        </div>
        <div className="col-12 col-sm-12 col-md-7 col-lg-7yar col-xl-5 col-xxl-4 mx-auto">
          <p className="custom-font-size fs-1">DWCorp é uma empresa dedicada a fornecer soluções de tecnologia (TI) 
            com uma equipe de desenvolvedores altamente qualificados.
            Fundada com o compromisso de impulsionar a inovação e a excelência em serviços voltados à tecnologia. 
            A DWCorp se destaca por oferecer soluções tecnológicas sob medida
            para atender às necessidades específicas de seus clientes.</p>
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 ">
          <img className="reunião" src={reunião} alt="reuniao" />
        </div>
      </div>
    </div>
  );
}

export default Services;
