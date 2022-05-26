import React from "react";
import Slider from "react-slick";
import "./ShopTheLook.style.css";

const ShopTheLook = ({ slider }) => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: true,
          draggable: true,
          speed: 500,
          dots: false,
        },
      },
    ],
  };


  return (
    <div className="shopLookMain">
      <ul style={{ width: "98%" }}>
        <Slider {...settings}>
          {slider?.slider1?.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <picture style={{ boxSizing: "border-box" }}>
                    <img className="slider-image"
                      src={item.img}
                      alt={item.name}
                    />
                  </picture>
                  <div style={{ padding: "25px 35px 0 30px" }}>
                    <div className="d-flex justify-content-between">
                      <h3
                        style={{
                          color: "#2d2e2c",
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                      >
                        {item.name}
                      </h3>
                      <span>
                        <i style={{fontSize:"15px"}} className="far fa-bookmark"></i>
                      </span>
                    </div>
                    <span
                    style={{
                      color: "#2d2e2c",
                      fontWeight: "500",
                      marginBottom: "0 !important",
                    }}
                    >
                      {item.price}
                    </span>
                    <p style={{ fontSize: "12px", color: "#898989" }}>
                      {item.fabric}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
          {/* End li */}
        </Slider>
      </ul>
    </div>
  );
};

export default ShopTheLook;
