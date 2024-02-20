
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Latest } from "../utils/Image";

const SimpleSlider = () => {
  let slider;
  const settings = {
    className:"padding:2px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
    customPaging: (i) => (
      <button
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "white", 
          borderRadius: "50%",
          margin: "3px 5px",
        }}
        
      ></button>
    ),
  };

  const nextSlide = () => {
    slider.slickNext();
  };

  const prevSlide = () => {
    slider.slickPrev();
  };

  console.log("Latest array:", Latest);

  return (
    <div className=" p-8 mx-auto ">
      <Slider ref={(s) => (slider = s)} {...settings}>
        {Latest.map((item) => (
          <a href="#" className=" cursor-pointer"  key={item.id}>
            <img  className="w-full" src={item.src} alt={item.alt} />
          </a>
        ))}
      </Slider>

      {/* <div className="flex justify-between" style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div> */}
    </div>
  );
};
export default SimpleSlider;

