import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../axios";
import './Row.css'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


const Row = (props) => {
  const [videoid, setvideoid] = useState('')
  const [error, seterror] = useState('')
  const fetchdata = async () => {
    const response = await axios.get(props.fetchurl);
   
    setMovies(response.data.results);
    return response;
  };
  const handleclick=async (movie)=>{
    if(videoid)
    {
      setvideoid('')
    }
    else
    {
     try {
       
       const url= await movieTrailer(movie?.title||"")
       console.log(url);
       const urlParams= new URLSearchParams(new URL(url).search)
       setvideoid(urlParams.get('v'))
     } catch (error) {
       
       seterror('404')
     }
     if(error)
     {
       seterror('')
     }
     
   

    }
 
    
  }
  useEffect(() => {
    fetchdata();
  }, [props.fetchurl]);

  const [movies, setMovies] = useState([]);
  const baseurl = "https://image.tmdb.org/t/p/original/";
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row_posters">
        {movies.map((movie,key) => {
          return (
            <img
              className={`row_poster ${props.islarge&&'row_posters_large'}`}
              src={`${baseurl}${props.islarge?movie.poster_path:movie.backdrop_path}`}
              alt="" key={movie.id}
             onClick={()=>{handleclick(movie)}}/>
          );
        })}
      </div>
      {videoid&&<YouTube videoId={videoid} opts={opts}></YouTube>}
      {error&&<div className="error__box">
        
        <h1 className="error__text">{error}</h1></div>}
    </div>
  );
};

export default Row;
