import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer-outer-wrapper">
      <div className="footer-inner-wrapper">
        <div className="footer-icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <XIcon />
          <YouTubeIcon />
        </div>
        <div className="footer-body">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Legal Notices</li>
              <li>Do Not Sell or Share My Personal Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Netflix Shop</li>
              <li>Cookie Preferences</li>
              <li>Ad Choices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="service">
          <p>Service Code</p>
        </div>
        <div className="copyright">
          <p>&copy; 1997-2025 Netflix,Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
