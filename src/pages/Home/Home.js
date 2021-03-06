import React from "react";
import AboutJackets from "../../components/AboutJackets/AboutJackets";
import Contact from "../../components/Contact/Contact";
import CustomDesign from "../../components/CustomDesign/CustomDesign";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import RecommendationSlider from "../../components/RecommendationSlider/RecommendationSlider";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <ProductInfo />
      <RecommendationSlider />
      <CustomDesign />
      <AboutJackets />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
