import React from "react";
import "./Footer.style.css";
import facebookIcon from "../../../assets/icons/facebook.png";
import instagramIcon from "../../../assets/icons/instagram.png";
import twitterIcon from "../../../assets/icons/twitter.png";
import youtubeIcon from "../../../assets/icons/youtube.png";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className=" footer-header">
          <div className="col-md-6 col-sm-12">
            <div className="fair-logo">
              <img
                src="https://cdn.suitsupply.com/image/upload/suitsupply/assets/fw20/footer/fair-wear-logo.png"
                alt="logo"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="fair-logo-text">
              <h3>Fair Wear Leader</h3>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="col-md-4">
            <div className="support">
              <h3>Support</h3>
              <ul>
                <a href="#">
                  <li>Returns & exchange</li>
                </a>
                <a href="#">
                  <li>Customization services</li>
                </a>
                <a href="#">
                  <li>FAQ</li>
                </a>
                <a href="#">
                  <li>All support</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact">
              <h3>Contact</h3>
              <ul>
                <li>
                  <span className="contactNumber">
                    WhatsApp: +31 655 110 516
                  </span>{" "}
                </li>
                <li>
                  <span className="contactNumber">Phone: +31 20 795 6685</span>
                </li>
                <li>
                  {" "}
                  <span className="contactNumber">
                    Email: service@suitsupply.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about">
              <h3>About</h3>
              <ul>
                <a href="#">
                  <li>our Story</li>
                </a>
                <a href="#">
                  <li>Press</li>
                </a>
                <a href="#">
                  <li>Careers</li>
                </a>
                <a href="#">
                  <li>Corporate service</li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social-icons">
            <i className=" social-link fab fa-facebook-f"></i>
            <i className=" social-link fab fa-twitter"></i>
            <i className=" social-link fab fa-instagram"></i>
            <i className=" social-link fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="terms">
        <a href="#">
          <span>Terms and Condition</span>{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
