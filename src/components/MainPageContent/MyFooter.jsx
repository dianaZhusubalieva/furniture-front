import React from "react";
// import {
//     Box,
//     Container,
//     Row,
//     Column,
//     FooterLink,
//     Heading,
// } from "./FooterCss";

import "./Assets/css/footer.css";
import "./Assets/FA/css/all.min.css";
import img5 from "./Assets/images/Lineage_OS_Logo.png";

const MyFooter = () => {
  return (
    <>
      <footer>
        <div class="footer-wrap">
          <div class="widgetFooter">
            <h4 class="uppercase">useful links</h4>
            <ul id="footerUsefulLink">
              <li title="About US">
                <span class="usefulLinksIcons">
                  <i class="far fa-id-card"></i>
                </span>
                <a>&nbsp;About us</a>
              </li>
              <li title="Our Team">
                <span class="usefulLinksIcons">
                  <i class="far fa-handshake"></i>
                </span>
                <a>&nbsp;Our team</a>
              </li>
              <li title="Gallery">
                <span class="usefulLinksIcons">
                  <i class="far fa-images"></i>
                </span>
                <a>&nbsp;Gallery</a>
              </li>
              <li title="Contact Us">
                <span class="usefulLinksIcons">
                  <i class="far fa-envelope"></i>
                </span>
                <a>&nbsp;Send email</a>
              </li>
            </ul>
          </div>
          <div class="widgetFooter" id="footerLogo">
            <p className="footerText" style={{ paddingBottom: "8px" }}>
              we're here to help
            </p>

            <ul id="footerUsefulLink">
              <li title="Contact Us">
                <span class="usefulLinksIcons">
                  <i class="far fa-envelope"></i>
                </span>
                <a>&nbsp;Contact us</a>
              </li>
            </ul>
          </div>

          <div class="widgetFooter">
            <h4 class="uppercase">Social media links</h4>
            <ul id="footerMediaLinks">
              <li class="media1" title="Facebook">
                <span class="mediaLinksIcons fb">
                  <i class="fab fa-facebook-square"></i>
                </span>
                <a class="fb">&nbsp;facebook</a>
              </li>
              <li class="media2" title="Twitter">
                <span class="mediaLinksIcons twit">
                  <i class="fab fa-twitter-square"></i>
                </span>
                <a class="twit">&nbsp;Twitter</a>
              </li>
              <li class="media3" title="Instagram">
                <span class="mediaLinksIcons insta">
                  <i class="fab fa-instagram"></i>
                </span>
                <a class="insta">&nbsp;instagram</a>
              </li>
              <li class="media4" title="Github">
                <span class="mediaLinksIcons git">
                  <i class="fab fa-github-alt"></i>
                </span>
                <a class="git">&nbsp;Github</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footerCopy">
          <div class="inb">
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
