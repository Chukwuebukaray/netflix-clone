import React, { useEffect, useRef } from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import caret from "../../assets/caret_icon.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("darknav");
      } else {
        navRef.current.classList.remove("darknav");
      }
    });
  }, []);

  return (
    <nav ref={navRef} className="navigation">
      <div className="leftnav">
        <img src={logo} />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="rightnav">
        <img src={search} className="icons" alt="searchicon" />
        <p>Children</p>
        <img src={bell} className="icons" alt="bellicon" />
        <div className="navprofile">
          <img src={profile} className="profile" alt="profileimg" />
          <img src={caret} alt="careticon" />
          <Link to={'/login'} className="dropdown">
            <p>Sign out of Netflix</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
