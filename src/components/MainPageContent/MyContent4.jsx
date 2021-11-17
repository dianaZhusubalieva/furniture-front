import { Container } from "@mui/material";
import React from "react";

const MyContent3 = () => {
  return (
    <div className="c4-img">
      <Container static>
        <div className="bestsellers">
          <h2>Best Sellers</h2>
        </div>
        <div className="content4">
          <div>
            <img
              width="300"
              src="https://www.pngarts.com/files/7/Modern-Furniture-PNG-Transparent-Image.png"
            />
          </div>

          <div>
            <img
              width="300"
              src="https://www.pngarts.com/files/7/Modern-Furniture-Transparent-Background-PNG.png"
            />
          </div>
          <div>
            <img
              width="320"
              src="https://www.pngarts.com/files/7/Furniture-PNG-Image-Transparent-Background.png"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyContent3;
