import * as React from "react";
import { Link } from "react-router-dom";
export default function StandardImageList() {
  return (
    <>
      <div className="container">
        <div className="content1">
          <div className="c1-text">
            <h1>This is content</h1>
            <p>
              Konsept tasarım şıklığıyla yaşam alanlarında büyüleyici izler
              bırakan Area Mobilya’nın, her parçası son detayına kadar özenle
              hazırlanmış zarif modellerini keşfedin.
            </p>
          </div>
          <div className="c1-img">
            <Link to="/products?type=диван">
              <img src="https://secure.img1-fg.wfcdn.com/im/67950423/resize-h800-w800%5Ecompr-r85/1437/143724636/Goza+88.6%27%27+Velvet+Sofa.jpg" />
            </Link>
            <Link to="/products?type=кресло">
              <img src="https://secure.img1-fg.wfcdn.com/im/40186650/resize-h800-w800%5Ecompr-r85/1679/167937404/Howie+Armchair.jpg" />
            </Link>
          </div>
          <div className="c1-img2">
            <Link to="/products?type=стол">
              <img src="https://assets.weimgs.com/weimgs/rk/images/wcm/products/202137/0009/silhouette-pedestal-round-dining-table-finley-chair-set-c.jpg" />
            </Link>

            <Link to="/products?type=кровать">
              <img src="https://media.architecturaldigest.com/photos/60a6efc4b8035041ccdab86c/1:1/w_1280,c_limit/cayman-platform-bed-headboard-1-o.jpg" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
