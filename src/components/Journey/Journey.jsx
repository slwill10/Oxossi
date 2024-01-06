import React from "react";
import "./Journey.css";
import geo from "../../assets/imgs/geometric.png";

function Journey() {
  return (
    <div>
      <header className="App-header">
        <img src={geo} className="App-geometric" alt="geo" />
        <p className="textheadertitle">
          Eleve Seu Código, Impulsione <span>seu Negócio.</span>
        </p>
        <p className="textheader">
          Sua visão, nossa experiência. Acelere o <br />
          cronograma do seu projeto com nossos
          <br />
          engenheiros qualificados. Experimente a<br />
          diferença em qualidade e eficiência.
        </p>
        <button className="button">
          Comece sua jornada em direção à excelência tecnológica agora
        </button>
      </header>
    </div>
  );
}

export default Journey;
