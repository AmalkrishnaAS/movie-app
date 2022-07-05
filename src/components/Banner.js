import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {

      async function fetchData() {
  
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        // Math.floor(Math.random() * request.data.results.length -1)
        return request;
      }
      fetchData();
    }, []);
  
 let path=movie.backdrop_path
 console.log(path)
  return (
    <div>
     <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        https://image.tmdb.org/t/p/original${path}
        )`,
        backgroundPosition: "top center"
      }}
    >
          <div className="banner-content">
            <h1 className='banner-title'>
              {movie?.name||movie?.title||movie?.original_name}
              <div className="banner-buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
              </div>
              <div className="description">
                <h1 className="banner-description">{(movie.overview)?movie.overview.slice(0,200)+'.....':''}</h1>
              </div>
              </h1>
          </div>
          <div className="fade"></div>
      </header>
    </div>
  );
};

export default Banner;
