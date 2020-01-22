import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => (
  <Carousel 
    autoPlay
    showThumbs={false}
    showIndicators={false}
    showStatus={false}
    showArrows={false}
    infiniteLoop={true}
    >
    <div>
      <img src="/images/carousel/1.webp" />
      <p className="legend">UK's largest Asian Grocers </p>
    </div>
    <div>
      <img src="/images/carousel/2.jpg" />
      <p className="legend">Quality Fruits and Vegetables </p>
    </div>
    <div>
      <img src="/images/carousel/3.webp" />
      <p className="legend">Choose a delivery or collection slot that suits you </p>
    </div>
    
  </Carousel>
);
