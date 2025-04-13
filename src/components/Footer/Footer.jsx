import React from "react";
import "./Footer.css";
import youtube from "../../assets/youtube_icon.png";
import twitter from "../../assets/twitter_icon.png";
import instagram from "../../assets/instagram_icon.png";
import facebook from "../../assets/facebook_icon.png";

const Footer = () => {

  const socialIcons = [
    { src: facebook, alt: "Facebook" },
    { src: instagram, alt: "Instagram" },
    { src: twitter, alt: "Twitter" },
    { src: youtube, alt: "YouTube" },
  ];

  const footerLinks = [
    "Audio Description",
    "Help Centre",
    "Gift Cards",
    "Media Centre",
    "Investor Relations",
    "Jobs",
    "Terms of Use",
    "Privacy",
    "Legal Notices",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
  ];


  return (
    <div className="footer">
      <div className="footer-icons">
        {socialIcons.map((icon, index) => (
          <img key={index} src={icon.src} alt={icon.alt} />
        ))}
      </div>

      <ul>
        {footerLinks.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>

      <p className="copyright">&copy; 1997-2025 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
