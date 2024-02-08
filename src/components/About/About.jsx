import React, { useEffect, useState } from "react";
import "./About.css";
import Israel from "../../assets/imgs/Israel.png";
import Jhonata from "../../assets/imgs/Jhonata.png";

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: Israel, name: "Israel Carvalho", company: "Gama Cidadão", description: "DWcorp consistently delivers services punctually without compromising on quality. Their exemplary analytical skills and responsiveness stand out as qualities that I highly appreciate." },
    { src: Jhonata, name: "Jhonata Oliveira", company: "Joves", description: "ABC Company consistently provides top-notch services with a keen eye for detail and a commitment to excellence. " }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, [currentIndex]);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <div className="container-fluid with-background">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" style={{ width: "300%" }}>
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === currentIndex ? "active" : ""
                        }`}
                    >
                      <img className="image"
                        style={{
                          width: "20%",
                          marginTop: "5%",
                          marginLeft: "5%",
                          borderRadius: "10%",
                        }}
                        src={image.src}
                        alt={`Slide ${index}`}
                      />
                      <div>
                        <h1 className="name">{image.name}</h1>
                        <h2 className="company">{image.company}</h2>
                        <p className="description"> {image.description}</p>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="prev"
                          onClick={prevSlide}
                          style={{ marginBottom: "-300px" }}
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                            style={{ backgroundColor: "black" }}
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="next"
                          onClick={nextSlide}
                          style={{ marginBottom: "-300px" }}
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true" style={{ backgroundColor: "black" }}
                          ></span>
                          <span className="visually-hidden" >Next</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;