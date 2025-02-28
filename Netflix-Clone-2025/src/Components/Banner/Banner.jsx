import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../../utils/axios"
import requests from "../../utils/requests"

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, []);
  function truncate(str, n) {
    //str is the movie? overview and n is 150
    return str?.length > n ? str.substr(0, n - 1) + "..." : str; // in this case n is 150
  }
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("http://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button play">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner_fadeBottom" />
      </div>
    </>
  );
};

export default Banner;
