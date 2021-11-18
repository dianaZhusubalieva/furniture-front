import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MyContent3 = () => {
  return (
    <div className="c4-img">
      <Container className="best">
        <div className="bestsellers">
          <h2>Best Sellers</h2>
        </div>
        <div className="content4">
          <Link to="/product/102903">
            <div>
              <img
                width="350"
                src="https://www.pngarts.com/files/7/Modern-Furniture-PNG-Transparent-Image.png"
                alt=""
              />
            </div>
          </Link>

          <div>
            <Link to="/">
              <img
                width="340"
                src="https://www.pngarts.com/files/7/Modern-Furniture-Transparent-Background-PNG.png"
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link to="/">
              <img
                width="350"
                src="https://www.pngarts.com/files/7/Furniture-PNG-Image-Transparent-Background.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyContent3;
