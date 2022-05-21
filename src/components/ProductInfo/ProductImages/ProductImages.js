import React from "react";

const ProductImages = ({ images }) => {

  return (
    <div>
      <div>
        {images?.productImage?.map((image, index) => {
          return (
            <div key={index}>
              <img title={images.productName} className="w-100 mb-2" src={image} alt="product" />
            </div>
          );
        })}
      </div>
      <div style={{ paddingTop: "122px" }}>
        <h1
          style={{
            marginBottom: "50px",
            fontSize: "32px",
            lineHeight: "40px",
            textAlign: "center",
          }}
        >
          More ways to wear
        </h1>
        {images?.moreProductImage?.map((image, index) => {
          return (
            <div key={index}>
              <img className="w-100 mb-2" src={image} alt="product" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
