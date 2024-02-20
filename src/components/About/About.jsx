import React, { useState} from 'react';
import "./About.css";
import Jhonata from '../../assets/imgs/Jhonata.png';
import Israel from '../../assets/imgs/Israel.png';

function About() {
  const empresarios = [
    {
      nome: "Jhonata Oliveira Veras",
      imagem: Jhonata,
      empresa: "Joves",
      frase: "at Dwcorp, dedication to providing high quality services on time and unwavering. They value analytical skills and responsiveness, elements that differentiate them in the technological scenario."
    },
    {
      nome: "Israel Carvalho",
      imagem: Israel,
      empresa: "Gama Cidadão",
      frase: "DWcorp consistently delivers services punctually without compromising on quality. Their exemplary analytical skills and responsiveness stand out as qualities that I highly appreciate."
    }
  ];

  const [index, setIndex] = useState(0); 

  const nextEmpresario = () => {
    setIndex((prevIndex) => (prevIndex + 1) % empresarios.length); 
  };

  const previousEmpresario = () => {
    setIndex((prevIndex) => (prevIndex - 1 + empresarios.length) % empresarios.length); 
  };

  const empresarioAtual = empresarios[index]; 

  const MAX_LENGTH = 80; 
  const partesDaFrase = [];
  let parteAtual = '';
  empresarioAtual.frase.split(' ').forEach((palavra) => {
    if ((parteAtual + palavra).length < MAX_LENGTH) {
      parteAtual += palavra + ' ';
    } else {
      partesDaFrase.push(parteAtual);
      parteAtual = palavra + ' ';
    }
  });
  partesDaFrase.push(parteAtual);

  return (
    <div className="container-fluid with-background d-flex justify-content-center align-items-center">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div style={{ backgroundColor: '#D9D9D9', height: '750px', width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: '140px'}}>
          <div style={{ textAlign: 'center', margin: '20px' }}>
            <img src={empresarioAtual.imagem} alt={empresarioAtual.nome} style={{ width: '150px', height: '150px', borderRadius: '50%', marginTop: '-20px' }} />
            <h1>{empresarioAtual.nome}</h1>
            <h2>{empresarioAtual.empresa}</h2>
            {partesDaFrase.map((parte, index) => (
              <p key={index} style={{ fontSize: '2.2em', fontFamily: 'Inter' }}>{parte}</p>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button className="arrow-button prev-button" onClick={previousEmpresario}></button>
            <button className="arrow-button" onClick={nextEmpresario}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
