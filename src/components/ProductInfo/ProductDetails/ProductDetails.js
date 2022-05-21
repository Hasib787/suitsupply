import React from "react";
import "./ProductDetails.style.css";
const ProductDetails = ({ info }) => {
  return (
    <div className="w-75 m-auto ">
      <h3>{info.productName}</h3>
      <p>{info.fabric}</p>
      <p>{info.price}</p>
      <p className="text-wrap p-0 m-0">{info.description}</p>

      <div className="d-f">
        <button className="bookmark">
          <span>
            <i class="far fa-bookmark"></i>
          </span>
        </button>
        <button className="select_size">Select size</button>
      </div>
      <div>
        <a className="customizeBtn" href="https://suitsupply.com/en-bd/custommade?productCode=P6409A&client=onLine&mode=CM&sizePassport=true&product=Shirt&countryCode=BD">
          <i className="customize_icon"></i>
          Customize
        </a>
      </div>
    </div>
  );
};

export default ProductDetails;
