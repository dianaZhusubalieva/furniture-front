import React from "react";
import image1 from "../../helpers/images/WallpaperDog-10803845.jpg";
import Carousel from "nuka-carousel";
import img2 from "../../helpers/images/Great style is easy. (1).png";
import img3 from "../../helpers/images/Layer on the soft & shimmery (1).png";
const MyHeader = () => {
  return (
    <Carousel className="slider-img">
      <img src={img2} />

      <img src={img3} />
      <img src="https://i.pinimg.com/originals/f8/17/87/f81787d6ef48a9ba6a320db97630c594.jpg" />
      <img src={image1} />

      <img src="https://wallpaper.dog/large/10989153.jpg" />
    </Carousel>
  );
};

export default MyHeader;
