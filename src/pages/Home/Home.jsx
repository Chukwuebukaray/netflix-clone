import React from "react";
import "./Home.css";
import Navigation from "../../components/Navigation/Navigation.jsx";
import herotitle from "../../assets/hero_title.png";
import play from "../../assets/play_icon.png";
import info from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="hero">
        <img src="/hero_banner.jpg" alt="" className="banner" />
        <div className="herocaption">
          <img src={herotitle} className="captionimg" />
          <p className="herotext">
            Discovering his ties to a Secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="herobtns">
            <button className="btn">
              <img src={play} />
              Play
            </button>
            <button className="btn darkbtn">
              <img src={info} />
              More Info
            </button>
          </div>
          <TitleCards title={"Popular on Netflix"} category={"popular"}/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks For You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
