import * as React from "react";
import { Link } from "react-router-dom";
export default function StandardImageList() {
  return (
    <>
      <div className="container">
        <div className="content1">
          <div className="c1-text">
            <h1>Bring joy home</h1>
            <p>
              However you're celebrating this year, there's joy in the details:
              family-style feats, tree trimming, holiday trimming, holiday
              baking... Little moments add up to big time fun.
            </p>
          </div>
          <div className="c1-img">
            <Link to="/product/765434">
              <img src="https://cdn.shopify.com/s/files/1/0265/0083/products/31480810_420x420.progressive.jpg?v=1605837264" alt="" />
            </Link>
            <Link to="/product/123424433">
              <img src="https://secure.img1-fg.wfcdn.com/im/42185893/resize-h800-w800%5Ecompr-r85/1440/144080416/Hailee+Genuine+Leather+Armchair.jpg" alt="" />
            </Link>
          </div>
          <div className="c1-img2">
            <Link to="/product/1793">
              <img src="https://secure.img1-fg.wfcdn.com/im/30651420/resize-h800-w800%5Ecompr-r85/1534/153436157/Adrien+87.4%27%27+Genuine+Leather+Sofa.jpg" alt="" />
            </Link>

            <Link to="/product/1234242332">
              <img src="https://cdn.shopify.com/s/files/1/0265/0083/products/34480459_420x420.progressive.jpg?v=1590128340" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
