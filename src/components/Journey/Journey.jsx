import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Journey.css";
import geo from "../../assets/imgs/geometric.png";
import woman from "../../assets/imgs/woman.png";


function Journey() {
  return (
    <div className="d-flex bg-dark">
      <div class="container-fluid mb-0">
        <div className="px-3">
          <div class="woman-container">
            <img className="woman" src={woman} alt="woman"/>
          </div>
          <div>
            <div class="col-12 col-sm-5 col-md-4 col-lg-5 col-xl-4 col-xxl-4">
              <img className="geo" src={geo} alt="IMGEFEITO" />
            </div>
          </div>
          <div class="col-12 col-sm-1 col-md-8 col-lg-2 col-xl-1 col-xxl-12">
            <h1 className="titulo"> Eleve Seu Código, Impulsione <span>seu Negócio.</span></h1>
          </div>
          <div class="col-12 col-sm-6 col-md-8 col-lg-3 col-xl-1 col-xxl-12">
            <p className="lead"> Sua visão, nossa experiência. Acelere o cronograma <br/>do seu projeto com nossos
              engenheiros qualificados. <br/>Experimente a diferença em qualidade e eficiência.</p>
          </div>
          <div class="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-3 col-xxl-4">
            <button className="button">
              <h1>Comece sua jornada em direção à excelência tecnológica agora</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
