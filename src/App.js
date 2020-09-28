import React from "react";
import "./App.css";
import Row from "./components/Row.js";
import requests from "./requests";

function App() {
  const {
    fetchTrending,
    fetchNetflixOriginals,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentaries,
  } = requests;
  console.log(fetchNetflixOriginals);
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={fetchNetflixOriginals}
        isLargerow
      />
      <Row title="Trending Now" fetchURL={fetchTrending} />
      <Row title="Top Rated" fetchURL={fetchTopRated} />
      <Row title="Action Movies" fetchURL={fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={fetchHorrorMovies} />
      <Row title="Documentaries" fetchURL={fetchDocumentaries} />
    </>
  );
}

export default App;
