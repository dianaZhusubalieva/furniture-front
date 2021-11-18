import { Container } from "@mui/material";
import React from "react";

const DelMethods = () => {
  return (
    <div className="del-m">
      <Container fixed>
        <h2
          style={{
            fontFamily: "Josefin Sans",
            letterSpacing: "1px",
            lineHeight: "25px",
            color: "#303030",
            fontSize: "30px",
          }}
        >
          Furniture in Fabrics You'll Love
        </h2>
        <div className="del-block">
          <div className="del-items">
            <img src="https://s3-us-west-2.amazonaws.com/media.modloft.com/pages/home/benefits/pricing.svg" />
            <p>High quality design with low price.</p>
          </div>
          <div className="del-items">
            <img src="https://s3-us-west-2.amazonaws.com/media.modloft.com/pages/home/benefits/home-trial.svg" />
            <p>Try 30 days at home.</p>
          </div>
          <div className="del-items">
            <img src="https://s3-us-west-2.amazonaws.com/media.modloft.com/pages/home/benefits/shipping.svg" />
            <p> Fast and free delivery to your house.</p>
          </div>
          <div className="del-items">
            <img src="https://s3-us-west-2.amazonaws.com/media.modloft.com/pages/home/benefits/swatches.svg" />
            <p>Ready designs make a choice easier </p>
          </div>
          <div className="del-items">
            <img src="https://s3-us-west-2.amazonaws.com/media.modloft.com/pages/home/benefits/chat.svg" />
            <p>we will help and support to choose right model.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DelMethods;
