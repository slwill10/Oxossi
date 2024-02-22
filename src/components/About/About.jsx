import React from "react";
import "./About.css";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Israel from "../../assets/imgs/Israel.png";
import Jhonata from "../../assets/imgs/Jhonata.png";

function ExampleCarouselImage({ imageSrc, text }) {
  return (
    <div>
      <img src={imageSrc} alt={text} />
    </div>
  );
}

function About() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <div className="container-fluid with-background">
        <Carousel activeIndex={index} onSelect={handleSelect}  style={{backgroundColor: '#D9D9D9', top: '25%', height: '60%'}}>
          <Carousel.Item>
            <ExampleCarouselImage imageSrc={Israel} text="First slide" className="img-one"/>
            <Carousel.Caption>
              <h1 className="name1">Israel Carvalho</h1>
              <h2 className="text-sub">Gama Cidadão</h2>
              <p className="text1">DWcorp consistently delivers services punctually without compromising on quality. 
              Their exemplary analytical skills and responsiveness stand out as qualities that I highly appreciate.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item  style={{backgroundColor: '#D9D9D9'}}>
            <ExampleCarouselImage imageSrc={Jhonata} text="Second slide" />
            <Carousel.Caption>
              <h1 className="name1">Jhonata Oliveira</h1>
              <h2 className="text-sub">Joves</h2>
              <p className="text1">ABC Company consistently provides top-notch services with a keen eye for detail and a commitment to excellence.</p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Add more Carousel.Item here if needed */}
        </Carousel>
      </div>
    </div>
  );
}

export default About;
