import React from "react";
import "./Technology.css";

function Technology() {
  return (
    <div>
      <div className="container-fluid1">
        <div className="row">
          <div>
            <div className="graySquare">
              <h1 className="pageTitle">CONTACT US</h1>
              <div className="line-contact"></div>
            </div>
          </div>
        </div>
        <div className="blueSquare"></div>
        <div className="redSquare">
          <div className="container">
            <form>
              <div className="row">
                <div className="col">
                  <div className="input-container">
                    <input type="text" className="form-control forms1" placeholder="Enter your name" name="name"></input>
                    <div className="line-one"></div>
                  </div>
                  <div className="input-container">
                    <input type="email" className="form-control forms 2" placeholder="Enter your email" name="email"></input>
                    <div className="line-two"></div>
                  </div>
                  <div className="input-container">
                    <textarea className="form-control" placeholder="Enter your message" name="text"></textarea>
                    <div className="line-three"></div>
                  </div>
                  <button type="button" className="btn btn-dark">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
