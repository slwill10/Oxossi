import React from "react";
import "./Journey.css";
import geo from "../../assets/imgs/geometric.png";

function Journey() {
  return (
    <div>
      <header className="App-header">
        <div className="Title">
          <p className="TextHeaderTitle">
            Eleve Seu Código, Impulsione <span> seu Negócio.</span>
          </p>
          <p className="TextJourney">
            Sua visão, nossa experiência. Acelere o <br />
            cronograma do seu projeto com nossos
            <br />
            engenheiros qualificados. Experimente a<br />
            diferença em qualidade e eficiência.
          </p>
          <button className="button">
            <p className="Text-buttom">
            Comece sua jornada em direção à <br/>excelência tecnológica agora
            </p>
          </button>
        </div>
        <div>
          <img src={geo} className="App-geometric" alt="geo"/>
        </div>
        
      </header>
    </div>
  );
}

export default Journey;