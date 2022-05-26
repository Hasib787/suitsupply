import React, { useEffect, useState } from "react";
import ShopTheLook from "./ShopTheLook/ShopTheLook";
import sliderData from "../../Database/slider";
import YouMightAlsoLike from "./YouMightAlsoLike/YouMightAlsoLike";
import "./RecommendationSlider.style.css";

const RecommendationSlider = () => {
  const [sliderInfo, setSliderInfo] = useState({});

  useEffect(() => {
    setSliderInfo(sliderData);
  }, [sliderInfo]);

  return (
    <div>
      <div className="shop-the-look">
        <div className="header-text">
          <h3 className="shop-text">Shop the Look</h3>
        </div>
        <ShopTheLook slider={sliderInfo} />
      </div>

      <div className="you-might-also-like">
        <div className="header-text">
          <h3 className="shop-text">You Might Also Like</h3>
        </div>
        <YouMightAlsoLike slider={sliderInfo} />
      </div>
    </div>
  );
};

export default RecommendationSlider;
