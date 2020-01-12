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
      <img src="./images/carousel/1.webp" />
      <p className="legend">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    <div>
      <img src="./images/carousel/3.webp" />
      <p className="legend">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </div>
    <div>
      <img src="./images/carousel/2.jpg" />
      <p className="legend">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
    
  </Carousel>
);
