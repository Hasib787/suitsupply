import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductImages from "./ProductImages/ProductImages";
import productData from "../../Database";
const ProductInfo = () => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(productData);
  }, []);

  return (
    <div style={{ position: "relative" }} className="row w-100">
      <div className="col-md-7">
        <ProductImages images={product} />
      </div>
      <div style={{ position: "relative" }} className="col-md-5">
        <div  style={{ position: "absolute" }} >
          <ProductDetails info={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
