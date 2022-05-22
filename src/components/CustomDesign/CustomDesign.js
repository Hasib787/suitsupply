import React from "react";
import circleIcon from "../../assets/icons/icon-cm-big.svg";
import alterIcon from "../../assets/icons/icon-alter.svg";
import "./CustomDesign.style.css";

const CustomDesign = () => {
  return (
    <div className="service-area">
      <div className="section-services h-100 w-1280 text-center">
        <p className="service-title mb-5 px-2">
          Don’t just fit in,
          <br />
          <strong>find your own perfect fit</strong>
        </p>

        <div class="row container-fluid container-services px-5 px-sm-0">
          <div style={{paddingLeft:"27%"}} className="alter col-md-6">
            <div className="item1">
              <div className="item1-image">
                <img src={alterIcon} alt="alter Icon"/>
              </div>

              <div className="item1-text">
                <h4>Alter Your Fit</h4>
                <p>
                  Shorten, lengthen, taper and more, done by our in-store expert
                  tailors.
                </p>
              </div>
            </div>
          </div>
          <div style={{paddingRight:"30%"}} className="circle col-md-6">
            <div className="item2">
              <div className="item2-image">
                <img src={circleIcon} alt="circleIcon" />
              </div>

              <div className="item2-text">
                <h4>Design Your Own</h4>
                <p>Create your own Custom Made piece from scratch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDesign;
