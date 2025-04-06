import React, { useEffect, useState } from "react";
import "./Player.css";
import back from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const { id } = useParams();

  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        } else {
          console.error("No video found for this movie");
          setApiData(null);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="player">
      <img
        src={back}
        alt="backicon"
        onClick={(event) => {
          navigate(-2);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        alt="Trailer"
        allowFullScreen
      ></iframe>
      <div className="playerinfo">
        <p>
          {apiData.published_at ? apiData.published_at.slice(0, 10) : "No date"}
        </p>
        <p>{apiData.name || "No Name"}</p>
        <p>{apiData.type || "No Type"}</p>
      </div>
    </div>
  );
};

export default Player;
