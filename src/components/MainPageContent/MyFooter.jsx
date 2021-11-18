import React from "react";


import "./Assets/css/footer.css";
import "./Assets/FA/css/all.min.css";
const MyFooter = () => {
  return (
    <>
      <footer>
        <div className="footer-wrap">
          <div className="widgetFooter">
            <h4 className="uppercase">useful links</h4>
            <ul id="footerUsefulLink">
              <li title="About US">
                <span className="usefulLinksIcons">
                  <i className="far fa-id-card"></i>
                </span>
                <a href='#/'>&nbsp;About us</a>
              </li>
              <li title="Our Team">
                <span className="usefulLinksIcons">
                  <i className="far fa-handshake"></i>
                </span>
                <a href='#/'>&nbsp;Our team</a>
              </li>
              <li title="Gallery">
                <span className="usefulLinksIcons">
                  <i className="far fa-images"></i>
                </span>
                <a href='#/'>&nbsp;Gallery</a>
              </li>
              <li title="Contact Us">
                <span className="usefulLinksIcons">
                  <i className="far fa-envelope"></i>
                </span>
                <a href='#/'>&nbsp;Send email</a>
              </li>
            </ul>
          </div>
          <div className="widgetFooter" id="footerLogo">
            <p className="footerText" style={{ paddingBottom: "8px" }}>
              we're here to help
            </p>

            <ul id="footerUsefulLink">
              <li title="Contact Us">
                <span className="usefulLinksIcons">
                  <i className="far fa-envelope"></i>
                </span>
                <a href='#/'>&nbsp;Contact us</a>
              </li>
            </ul>
          </div>

          <div className="widgetFooter">
            <h4 className="uppercase">Social media links</h4>
            <ul id="footerMediaLinks">
              <li className="media1" title="Facebook">
                <span className="mediaLinksIcons fb">
                  <i className="fab fa-facebook-square"></i>
                </span>
                <a href='#/' className="fb">&nbsp;facebook</a>
              </li>
              <li className="media2" title="Twitter">
                <span className="mediaLinksIcons twit">
                  <i className="fab fa-twitter-square"></i>
                </span>
                <a href='#/' className="twit">&nbsp;Twitter</a>
              </li>
              <li className="media3" title="Instagram">
                <span className="mediaLinksIcons insta">
                  <i className="fab fa-instagram"></i>
                </span>
                <a href='#/' className="insta">&nbsp;instagram</a>
              </li>
              <li className="media4" title="Github">
                <span className="mediaLinksIcons git">
                  <i className="fab fa-github-alt"></i>
                </span>
                <a href='#/' className="git">&nbsp;Github</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerCopy">
          <div className="inb">
            <p>
              Copyrights<sup>&copy;</sup> 2021 Makers. Developed with{" "}
              <img style={{ width: '20px' }} src="https://cdn-icons-png.flaticon.com/512/1077/1077086.png" alt="" />
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MyFooter;
