import React from "react";
import image1 from "../../helpers/images/WallpaperDog-10803845.jpg";
import Carousel from "nuka-carousel";
import img2 from "../../helpers/images/Great style is easy. (1).png";
import img3 from "../../helpers/images/Layer on the soft & shimmery (1).png";
const MyHeader = () => {
  return (
    <Carousel className="slider-img">
      <img src={img2} alt="" />

      <img src={img3} alt="" />
      <img
        src="https://i.pinimg.com/originals/f8/17/87/f81787d6ef48a9ba6a320db97630c594.jpg"
        alt=""
      />
      <img
        src="https://cdn.shopify.com/s/files/1/1609/4363/files/ytwedubxeakg50q0vrbp_2048x2048_edited_2048x2048.jpg?v=1568918515"
        alt=""
      />
      <img src={image1} alt="" />

      <img src="https://wallpaper.dog/large/10989153.jpg" alt="" />
    </Carousel>
  );
};

export default MyHeader;
