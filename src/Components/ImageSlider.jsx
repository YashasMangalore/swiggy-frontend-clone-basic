import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CLOUDINARY_URL } from "../Utils/Constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ImageSlider = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container" style={{ width: "100%", margin: "0" }}>
      <h2 style={{ textAlign: "center" }}></h2>
      <Slider {...settings}>
        {data &&
          data.map((item) => {
            let temp1 = item.action.text.split(" ");
            let temp2 = item.action.text.split("_");
            if (temp1.length === 2 || temp2.length === 2 || temp1== "Cakes" ) {
              return null;
            }

            return (
              <div key={item.id}>
                <img
                  onClick={() => {
                    // dispatch(addItem(item));
                    navigate(`/showitems/${item.action.text}`);
                  }}
                  src={CLOUDINARY_URL + item.imageId}
                  alt={item.action.text}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default ImageSlider;
