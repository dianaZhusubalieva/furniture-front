import React from "react";
import image1 from "../../helpers/images/WallpaperDog-10803845.jpg";
import Carousel from "nuka-carousel";
const MyHeader = () => {
  return (
    <Carousel className="slider-img">
      <img src="https://images.wallpaperscraft.com/image/single/sofa_furniture_interior_design_style_comfort_70000_3840x2160.jpg" />

      <img src="https://wallpaper.dog/large/10989128.jpg" />
      <img src="https://i.pinimg.com/originals/f8/17/87/f81787d6ef48a9ba6a320db97630c594.jpg" />
      <img src={image1} />

      <img src="https://wallpaper.dog/large/10989153.jpg" />
    </Carousel>
  );
};

export default MyHeader;
