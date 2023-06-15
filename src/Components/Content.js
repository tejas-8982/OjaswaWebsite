import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/content/agm1.jpg";
import img2 from "../Assets/content/ted2.jpg";
import img3 from "../Assets/content/aayam1.jpeg";
import img4 from "../Assets/content/boi.jpg";
import img5 from "../Assets/content/ted3.jpg";

const Content = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend"></p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend"></p>
        </div>
        <div>
          <img src={img3} alt="Item1" />
          <p className="legend"></p>
        </div>
        <div>
          <img src={img4} alt="Item1" />
          <p className="legend"></p>
        </div>
        <div>
          <img src={img5} alt="Item1" />
          <p className="legend"></p>
        </div>
      </Carousel>
    </div>
  );
};

export default Content;