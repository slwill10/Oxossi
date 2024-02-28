import React from "react";
import "./Footer.css";
import linkedin from "../../assets/imgs/linkedin.png";
import { Form, Button } from 'react-bootstrap';

function Footer() {
  return (
    <div className="container-footer">
      <div className="row">
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 services">
          <h1 style={{ marginBottom: '30px' }}>Home</h1>
          <h1 style={{ marginBottom: '30px' }}>Services</h1>
          <h1 style={{ marginBottom: '30px' }}>Technology</h1>
          <h1 style={{ marginBottom: '30px' }}>Who We Are?</h1>
          <h1 style={{ marginBottom: '30px' }}>Blogs</h1>
        </div>
        <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 offset-2">
          <div className="row row-contact">
            <div className="col">
              <h1>(61)98178-1286</h1>
              <img src={linkedin} alt="Linkedin" className="linkedin-footer" />
            </div>
          </div>
        </div>
        <div>
          <div className="line-footer"></div>
          <h1 className="dwcorp">© DWcorp LTDA. 2023. All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;