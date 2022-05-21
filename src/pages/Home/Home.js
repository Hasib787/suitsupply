import React from "react";
import CustomDesign from "../../components/CustomDesign/CustomDesign";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import Header from "../../components/Shared/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <ProductInfo />
      <CustomDesign />
    </div>
  );
};

export default Home;
