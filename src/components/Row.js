import React, { useState, useEffect } from "react";
import axios from "../axios.js";
import "./Row.css";

const base_URL = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchURL, isLargerow }) {
  const [movies, setMovies] = useState([]);
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

  //console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row_poster ${isLargerow && "row_poster_large"}`}
              src={`${base_URL}${
                isLargerow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
