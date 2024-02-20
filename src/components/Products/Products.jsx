import React from "react";
import "../Products/Products.css";
import css from "../../assets/imgs/css-img.png";
import csharp from "../../assets/imgs/csharp-img.png";
import html from "../../assets/imgs/html-img.png";
import react from "../../assets/imgs/react-img.png";
import angular from "../../assets/imgs/angular-img.png";
import dotnet from "../../assets/imgs/dotnet-img.png";
import aws from "../../assets/imgs/aws-img.png";
import nodejs from "../../assets/imgs/nodejs-img.png";

function Products() {
  return (
    <div className="container-fluid" style={{paddingBottom: '10vh'}}>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="title-product">
            <div>The tech stack behind competitive products</div>
          </div>
          <div className="col-9 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="line-product1"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <img src={css} alt="css" className="css-img " />
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <img src={html} alt="html" className="html-img" />
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <img src={react} alt="react" className="react-img" />
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <img src={csharp} alt="c-sharp-img" className="csharp-img" />
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <img src={angular} alt="angular" className="angular-img" />
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <img src={dotnet} alt="dotnet" className="dotnet-img" />
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <img src={aws} alt="aws" className="aws-img" />
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <img src={nodejs} alt="nodejs" className="nodejs-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
