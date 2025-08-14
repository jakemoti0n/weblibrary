import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import banner from "../../../assets/images1.jpg"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return(<Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div>
        <img
          src={banner}
          alt="배너1"
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
      </div>
      <div>
        <img
          src={banner}
          alt="배너2"
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
      </div>
      <div>
        <img
          src={banner}
          alt="배너3"
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
      </div>
    </Carousel>)
  

};


export default Banner