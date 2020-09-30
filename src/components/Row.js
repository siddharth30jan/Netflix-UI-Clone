import React, { useState, useEffect } from "react";
import axios from "../axios.js";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

const base_URL = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchURL, isLargerow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = (movie) => {
    //alert(movie);
    if (trailerUrl) setTrailerUrl("");
    else {
      //console.log(movie.name);
      movieTrailer(movie?.title || "")
        .then((url) => {
          const URLParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(URLParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    async function fetchDate() {
      try {
        const request = await axios.get(fetchURL);
        setMovies(request.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchDate();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  //console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={(e) => {
                // console.table(movie);
                handleClick(movie);
              }}
              className={`row_poster ${isLargerow && "row_poster_large"}`}
              src={`${base_URL}${
                isLargerow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
