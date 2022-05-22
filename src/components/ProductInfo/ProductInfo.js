import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductImages from "./ProductImages/ProductImages";
import productData from "../../Database";
import './ProductInfo.style.css';

const ProductInfo = () => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(productData);
  }, []);

  return (
    <div
      className="row product-info"
    >
      <div className="col-md-7 product-images">
        <ProductImages images={product} />
      </div>
      <div style={{ position: "relative" }} className="product-details col-md-5">
        <div style={{ position: "sticky", top: "70px" }}>
          <ProductDetails info={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
