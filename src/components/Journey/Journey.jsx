import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Journey.css";
import woman from "../../assets/imgs/woman.png";

function Journey() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="d-flex bg-dark">
      <div className="container-fluid">
        <div className="px-3">
          <div className="d-flex justify-content-center">
          </div>
          {windowWidth < 768 ? (
            <>
            <div className="col-6 col-sm-4 col-md-4 col-lg-5 col-xl-4 col-xxl-4">
              <img className="woman" src={woman} alt="woman" />
            </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-4 col-xxl-4">
                <button className="button">
                  <h1>Start your journey towards technological excellence now</h1>
                </button>
              </div>
              <div className="col-10 col-sm-7 col-md-12 col-lg-3 col-xl-1 col-xxl-12">
                <h1 className="titulo"> Elevate Your Code, Boost <span>your Business.</span></h1>
              </div>
              <div className="col-9 col-sm-7 col-md-12 col-lg-6 col-xl-3 col-xxl-4">
                <p className="lead">Your vision, our experience. Accelerate your project timeline with our
                  qualified engineers. Experience the difference in quality and efficiency.</p>
              </div>
            </>
          ) : (
            <>
            <div className="col-6 col-sm- col-md-4 col-lg-5 col-xl-4 col-xxl-4">
                <img className="woman" src={woman} alt="woman" />
              </div>
              <div className="col-10 col-sm-7 col-md-8 col-lg-3 col-xl-1 col-xxl-12">
                <h1 className="titulo">Elevate Your Code, Boost <span>your Business.</span></h1>
              </div>
              <div className="col-9 col-sm-7 col-md-7 col-lg-2 col-xl-3 col-xxl-4">
                <p className="lead">  Your vision, our experience. Accelerate your project timeline with our
                  qualified engineers. Experience the difference in quality and efficiency.</p>
              </div>
              <div className="col-1 col-sm-12 col-md-1 col-lg-5 col-xl-4 col-xxl-4">
                <button className="button">
                  <h1>Start your journey towards technological excellence now</h1>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Journey;