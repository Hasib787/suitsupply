import React, { useEffect, useRef, useState } from "react";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductImages from "./ProductImages/ProductImages";
import productData from "../../Database";
import './ProductInfo.style.css';

const ProductInfo = () => {
  const [product, setProduct] = useState({});
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setProduct(productData);
  }, []);
const screenSize = 580;

const mobileRef = useRef(null);
const handleMobile =(e)=>{
  // if(e.target.)
  console.log(mobileRef?.current?.classList.includes("mobile"));
}
  return (
    <div
      className="row product-info"
    >
      <div className="col-md-7 product-images">
        <ProductImages images={product} />
      </div>
      <div style={{ position: "relative" }} className="product-details col-md-5">
        <div onClick={handleMobile} ref={mobileRef} className={screenSize ? "mobile" : ""} style={{ position: "sticky", top: "70px" }}>
          <ProductDetails info={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
