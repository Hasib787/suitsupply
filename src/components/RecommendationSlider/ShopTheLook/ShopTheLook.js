import React from "react";
import Slider from "react-slick";

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
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <ul style={{ width: "98%" }}>
        <Slider {...settings}>
          {slider?.slider1?.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <div>
                    <img
                      style={{ width: "95%" }}
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <p>{item.fabric}</p>
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
