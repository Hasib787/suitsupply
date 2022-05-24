import React, { useEffect, useState } from "react";
import ShopTheLook from "./ShopTheLook/ShopTheLook";
import sliderData from "../../Database/slider";
const RecommendationSlider = () => {
  const [sliderInfo, setSliderInfo] = useState({});

  useEffect(() => {
    setSliderInfo(sliderData);
  }, [sliderInfo]);
  console.log("slider info", sliderInfo);
  return (
    <div>
      <h3>Shop the Look</h3>
     
      <ShopTheLook slider={sliderInfo} />
     

    </div>
  );
};

export default RecommendationSlider;
