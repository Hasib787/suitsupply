import React from "react";
import './AboutJackets.style.css';

const AboutJackets = () => {
  return (
    <div className="gallery-area">
      <div className="row p-0 m-0 w-100">
        <div style={{padding: "0"}} className="col-sm-12 col-md-6 ">
          <div className="gallery-image">
            <img
              src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_1024/suitsupply/assets/fw20/footer/footer-store.jpg"
              alt="House"
            />
          </div>
        </div>

        <div style={{padding: "0"}} className="col-sm-12 col-md-6">
          <div className="gallery-text">
            <h3>Find your nearest store</h3>
            <p className="text-store">
              Visit one of our 150 stores worldwide for customizations, fittings
              styling advice.
            </p>
            <button className="btn">Stores</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJackets;
